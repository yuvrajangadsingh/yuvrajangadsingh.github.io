import Script from 'next/script';

const GoogleAnalytics = () => (
  <>
    {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
    )}

    {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
    )}
  </>
);

export default GoogleAnalytics;
