import usePosts from "@/hooks/usePosts";
import FormPost from "../components/Form";
import { useTranslation } from "react-i18next";

const AddPost = () => {
  const { loading, error, fetchPosts } = usePosts();

  console.log(error);

  const onFinish = (value: any) => {
    fetchPosts("posts", "POST", value);
  };

  const { t } = useTranslation();

  return (
    <>
      <FormPost
        formName={t("posts.title_add")}
        loading={loading}
        onFinish={onFinish}
      />
    </>
  );
};

export default AddPost;
