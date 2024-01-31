const Detail = (props) => {
  const { postData, postDetail } = props;
  return (
    <div className="flex flex-col items-center gap-[80px] mt-[120px] md:container md:mx-auto max-w-[1280px] w-[100%]">
      {props.postData.map((post) => (
        <div className="flex w-[800px] flex-col items-center gap-8">
          <div className="flex flex-col items-start gap-5 self-stretch"></div>
          <div className="h-[462px] self-stretch rounded-[12px]"></div>
          <div className="w-[804px]">
            <p className="text-[#3B3C4A] font-serif text-xl not-italic font-normal leading-8"></p>
            <p className="text-[#3B3C4A] font-serif text-xl not-italic font-normal leading-8"></p>
          </div>
          <div className="flex flex-col items-start gap-4 self-stretch">
            <div className="self-stretch">
              <h3 className="text-[#181A2A] font-sans text-2xl not-italic font-semibold leading-7"></h3>
            </div>
            <div className="self-stretch">
              <p className="text-[#3B3C4A] font-serif text-xl not-italic font-normal leading-8"></p>
              <p className="text-[#3B3C4A] font-serif text-xl not-italic font-normal leading-8"></p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 self-stretch">
            <div className="self-stretch">
              <h3 className="text-[#181A2A] font-sans text-2xl not-italic font-semibold leading-7"></h3>
            </div>
            <div className="self-stretch">
              <p className="text-[#3B3C4A] font-serif text-xl not-italic font-normal leading-8"></p>
              <p className="text-[#3B3C4A] font-serif text-xl not-italic font-normal leading-8"></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Detail;

export const getStaticProps = async (context) => {
  const post = await fetch("https://dev.to/api/articles?top=30&per_page=9");
  const postData = await post.json();

  const path = postData[0].path;
  const postDetails = await fetch(`https://dev.to/api/articles${path}`);
  const postDetail = await postDetails.json();

  return {
    props: { postData, postDetail },
  };
};
