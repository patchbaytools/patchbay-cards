# Fix NEXT_REDIRECT Error in Vercel Deployment

## 🐛 Problem

The application was throwing `NEXT_REDIRECT` errors in Vercel production deployments when API calls failed. This was causing the redirect mechanism to break and users to see error pages instead of being properly redirected to `https://patchbay.xyz`.

### Error Details

```
Error fetching card data: Error: NEXT_REDIRECT
    at i (.next/server/chunks/894.js:39:5965)
    at u (.next/server/chunks/894.js:39:6258)
    at a (.next/server/app/[hash]/[custom_endpoint]/page.js:14:8884)
    at async s (.next/server/app/[hash]/[custom_endpoint]/page.js:14:9155) {
  digest: 'NEXT_REDIRECT;replace;https://patchbay.xyz;307;'
}
```

## 🔍 Root Cause Analysis

The issue was in `src/lib/getCardData.ts`. The function was using a `try-catch` block that was **intercepting and re-throwing** Next.js redirect errors. When `redirect("https://patchbay.xyz")` was called, Next.js throws a special `NEXT_REDIRECT` error internally to handle the redirect. However, the catch block was catching this error and re-throwing it as a generic error, which broke the redirect flow.

### Before (Problematic Code)

```typescript
export async function getCardData(
  custom_endpoint: string,
  hash: string
): Promise<BusinessCardResponse> {
  try {
    const url = `${process.env.NEXT_PUBLIC_PATCHBAY_API_URL}/api/v1/card/public/${custom_endpoint}/${hash}`;
    const res = await fetch(url);
    if (!res.ok) {
      redirect("https://patchbay.xyz"); // This gets caught and re-thrown!
    }
    // ... rest of function
  } catch (error) {
    console.error("Error fetching card data:", error);
    throw error; // This breaks the redirect!
  }
}
```

## ✅ Solution

### 1. Removed Problematic Try-Catch Block

Removed the `try-catch` wrapper that was intercepting Next.js redirect errors.

### 2. Added Comprehensive Type Guards

Implemented proper type checking for parameters, environment variables, and response data:

```typescript
export async function getCardData(
  custom_endpoint: string,
  hash: string
): Promise<BusinessCardResponse> {
  // Type guard for parameters
  if (
    !custom_endpoint ||
    !hash ||
    typeof custom_endpoint !== "string" ||
    typeof hash !== "string"
  ) {
    console.error("Invalid parameters provided to getCardData");
    redirect("https://patchbay.xyz");
  }

  const url = `${process.env.NEXT_PUBLIC_PATCHBAY_API_URL}/api/v1/card/public/${custom_endpoint}/${hash}`;

  // Type guard for environment variable
  if (!process.env.NEXT_PUBLIC_PATCHBAY_API_URL) {
    console.error(
      "NEXT_PUBLIC_PATCHBAY_API_URL environment variable is not set"
    );
    redirect("https://patchbay.xyz");
  }

  const res = await fetch(url);
  if (!res.ok) {
    console.error(`API request failed with status: ${res.status}`);
    redirect("https://patchbay.xyz");
  }

  const data = (await res.json()) as BusinessCardResponse;

  // Enhanced type guard for response data
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    console.error("Invalid response format:", data);
    redirect("https://patchbay.xyz");
  }

  return data;
}
```

### 3. Updated Type Signatures

Updated component type signatures to reflect that `getCardData` always returns valid data or redirects:

- **BusinessCard.tsx**: Changed `data: BusinessCardResponse | null` to `data: BusinessCardResponse`
- **DetailedView.tsx**: Changed `data?: BusinessCardResponse | null` to `data: BusinessCardResponse`
- Removed unnecessary null checks in components

## 🧪 Testing

### Type Safety

- ✅ `npm run type-check` passes
- ✅ All TypeScript errors resolved
- ✅ Proper type guards implemented

### Build Verification

- ✅ `npm run build` completes successfully
- ✅ No compilation errors
- ✅ Production build ready

### Error Handling

- ✅ Redirects work properly without being intercepted
- ✅ Clear error messages for different failure scenarios
- ✅ Graceful fallbacks for invalid data

## 🏗️ Architecture Improvements

### Design Patterns Applied

- **Domain-Driven Design**: Clear separation of concerns
- **Type Guards**: Runtime type safety with proper fallbacks
- **Error Boundaries**: Proper error handling without interfering with framework internals

### Code Quality

- **Consistent Patterns**: Follows existing redirect patterns in codebase
- **Better Logging**: Specific error messages for debugging
- **Type Safety**: Accurate type signatures throughout

## 📋 Files Changed

### Core Fix

- `src/lib/getCardData.ts` - Removed try-catch, added type guards

### Type Updates

- `src/app/[hash]/[custom_endpoint]/BusinessCard.tsx` - Updated type signature
- `src/components/detailed-view/index.tsx` - Updated type signature, removed null check

## 🚀 Deployment Impact

- **Fixes**: NEXT_REDIRECT errors in Vercel production
- **Improves**: User experience with proper redirects
- **Enhances**: Error handling and debugging capabilities
- **Maintains**: All existing functionality

## 🔄 Rollback Plan

If issues arise, the changes can be easily reverted by:

1. Restoring the try-catch block in `getCardData.ts`
2. Reverting type signature changes in components
3. The fix is isolated and doesn't affect other parts of the application

## 📝 Additional Notes

- This fix follows the existing patterns in the codebase (see `src/app/[...not_found]/page.tsx` and `src/app/not-found.tsx`)
- No breaking changes to the public API
- Maintains backward compatibility
- Improves error handling without changing user-facing behavior

---

**Ready for review and deployment** ✅
