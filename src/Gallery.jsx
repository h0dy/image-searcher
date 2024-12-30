import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GoLinkExternal } from "react-icons/go";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos/?client_id=${
  import.meta.env.VITE_UNSPLASH_ACCESS_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const res = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  const result = res?.data?.results;

  return (
    <section className="gallery">
      <div className="gallery-container">
        {res.isLoading ? (
          <div className="loading-spinner"></div>
        ) : (
          <>
            {res.isError ? (
              <h2>There was an error</h2>
            ) : (
              <>
                {result ? (
                  <>
                    {result.map((item) => {
                      const url = item?.urls?.regular;
                      const description = item.description;
                      return (
                        <div key={item.id} className="img-container group">
                          <img
                            className="image"
                            src={url}
                            alt={item.alt_description}
                          />
                          <div className="img-static-container">
                            <div className="img-statics">
                              <div className="img-info">
                                <p className="text-sm">
                                  {description?.substring(0, 60)}
                                  {description?.length > 60 && "..."}
                                </p>
                                <p className="text-xs">
                                  By: {item.user.first_name} - {item.likes}{" "}
                                  Likes
                                </p>
                              </div>
                              <div className="img-url">
                                <a href={item.links.html} target="_blank">
                                  <GoLinkExternal />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <h2>There are no results</h2>
                )}
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Gallery;
