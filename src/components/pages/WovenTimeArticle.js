import ArticleWrapper from "../ArticleWrapper";

import contents from "../../directory/woven-time/content.json"
import directory from "../../directory/contentDirectory.json"

function WovenTimeArticle() {
    const headers = directory["content-directory"]["woven-time/interactive"]

    return (
        <ArticleWrapper headers={headers} contents={contents.content} />
    );
}
  
export default WovenTimeArticle