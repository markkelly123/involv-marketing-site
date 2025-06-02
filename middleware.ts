import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Only activate in Vercel Preview environment
  if (process.env.VERCEL_ENV !== 'preview') {
    return NextResponse.next();
  }

  const basicAuth = request.headers.get('authorization');

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, password] = Buffer.from(authValue, 'base64').toString().split(':');

    const validUser = process.env.AUTH_USER;
    const validPassword = process.env.AUTH_PASSWORD;

    if (user === validUser && password === validPassword) {
      return NextResponse.next();
    }
  }

  const response = new NextResponse('Unauthorized', { status: 401 });
  response.headers.set('WWW-Authenticate', 'Basic realm="Preview Access"');

  return response;
}
