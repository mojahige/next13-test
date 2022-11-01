type Props = {
  params?: { slug: string };
  searchParams?: { id: string };
};

export default function Page({ params, searchParams }: Props) {
  // /blog/hello-world => { params: { slug: 'hello-world' } }
  // /blog/hello-world?id=123 => { searchParams: { id: '123' } }

  console.log(searchParams);

  return (
    <>
      {params?.slug && (
        <p>
          slug is <b>{params.slug}</b>
        </p>
      )}
      {searchParams?.id && (
        <p>
          search params is <b>{searchParams.id}</b>
        </p>
      )}
    </>
  );
}
