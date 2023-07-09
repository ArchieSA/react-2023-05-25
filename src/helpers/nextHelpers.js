import { headers } from 'next/headers'

export const isServer = () => typeof window === 'undefined';

export const constructServerUrl = (relativeUrl) => {
  const headersList = headers();
  const domain = headersList.get('host') || '';
  const fullUrl = headersList.get('referer') || '';
  const [, pathname] = fullUrl.match( new RegExp(`https?:\/\/${domain}(.*)`))||[];

  // console.log('fullUrl', fullUrl)
  // console.log('pathname', pathname)

  return fullUrl ? (pathname + (pathname.endsWith('/') ? '' : '/') + relativeUrl) : `/${relativeUrl}`;
};

export const constructFullServerUrl = (relativeUrl) => {
  const headersList = headers();
  const fullUrl = headersList.get('referer') || '';
  
  return new URL(relativeUrl, fullUrl).toString();
};
