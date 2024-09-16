import usePosts from "@/hooks/usePosts";
import FormPost from "../../components/Form";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout";

const UpdatePost = () => {
  const { loading, error, fetchPosts } = usePosts();
  console.log(error);

  const onFinish = (value: any) => {
    fetchPosts("posts", "PUT", value);
  };

  const { t } = useTranslation();

  return (
    <>
      <Layout>
        <FormPost
          formName={t("posts.title_edit")}
          loading={loading}
          onFinish={onFinish}
        />
      </Layout>
    </>
  );
};

export default UpdatePost;
