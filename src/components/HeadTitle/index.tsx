import Head from "next/head";

interface HeadTitle {
  title: string;
}

export const HeadTitle = ({ title }: HeadTitle) => (
  <Head>
    <title>{title} | Dualbank</title>
  </Head>
);
