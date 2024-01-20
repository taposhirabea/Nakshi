import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "wvakajxfcw19",
    accessToken: "pe079pQZYWKTOnvuqXS6DFwFqjqJSgk0kHXtayy_Aj4",
    host: "preview.contentful.com"
  });

  const getAuthors = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "author",
        select: "fields"
      });

      const sanitizedEntries = entries.items.map((item) => {
        const avatar = item.fields.avatar.fields;
        return {
          ...item.fields,
          avatar
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  return { getAuthors };
};

export default useContentful;
