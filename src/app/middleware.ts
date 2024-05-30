import { ACCESS_COOKIES } from '@/lib/contants';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.info(request?.cookies.get(ACCESS_COOKIES)?.value, 'this is value');

  if (
    !request?.cookies.get(ACCESS_COOKIES)?.value ||
    request?.cookies.get(ACCESS_COOKIES)?.value == '0'
  ) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}
export const config = {
  matcher: '/:path*',
};
