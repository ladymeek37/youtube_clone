import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./HomePage.css";
import { Link } from "react-router-dom";


let defaultVideos = [

    {
        "kind": "youtube#searchResult",
        "etag": "8bk9iq5rpRrZCeAg2b1DcDAXOyM",
        "id": {
            "kind": "youtube#video",
            "videoId": "JnhIiMBdK_c"
        },
        "snippet": {
            "publishedAt": "2023-03-06T17:10:04Z",
            "channelId": "UCt16NSYjauKclK67LCXvQyA",
            "title": "Foundation&#39;s &quot;Whippersnappers&quot; Video",
            "description": "Keegan McCutchen sets the stage with his first part for the F Troop, followed by a barrage of heavy rips from the whole squad.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/JnhIiMBdK_c/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/JnhIiMBdK_c/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/JnhIiMBdK_c/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "ThrasherMagazine",
            "liveBroadcastContent": "none",
            "publishTime": "2023-03-06T17:10:04Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "mVY_WvN3mXYDEgYs9A_Eh_cG9go",
        "id": {
            "kind": "youtube#video",
            "videoId": "5TjuwH6R_tk"
        },
        "snippet": {
            "publishedAt": "2023-03-04T19:10:54Z",
            "channelId": "UCt16NSYjauKclK67LCXvQyA",
            "title": "Leo Romero - The Way We Move",
            "description": "For Leo, music and skating go hand in hand with a life on the road. From playing shows and getting clips to tapping Langhorne ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/5TjuwH6R_tk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/5TjuwH6R_tk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/5TjuwH6R_tk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "ThrasherMagazine",
            "liveBroadcastContent": "none",
            "publishTime": "2023-03-04T19:10:54Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "tzllBz0irfguMtl_4XY11RkDHVs",
        "id": {
            "kind": "youtube#video",
            "videoId": "1KTSxYb6hcY"
        },
        "snippet": {
            "publishedAt": "2023-02-24T16:58:45Z",
            "channelId": "UCt16NSYjauKclK67LCXvQyA",
            "title": "Leo Romero&#39;s &quot;SKATER&quot; Emerica Part",
            "description": "Skater is fuelin' the van and rippin' the rail at the gas station. Skater is going back to back at a spot with your best friend. Skater is ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/1KTSxYb6hcY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/1KTSxYb6hcY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/1KTSxYb6hcY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "ThrasherMagazine",
            "liveBroadcastContent": "none",
            "publishTime": "2023-02-24T16:58:45Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "PumrBb4QkA2Gbbd5QJzowYGZdFQ",
        "id": {
            "kind": "youtube#video",
            "videoId": "IeJjFzpINOA"
        },
        "snippet": {
            "publishedAt": "2023-02-17T17:10:05Z",
            "channelId": "UCt16NSYjauKclK67LCXvQyA",
            "title": "Ishod Wair&#39;s &quot;Spitfire&quot; Part",
            "description": "It's not just what he does, but how he does it. Ishod sets the standard, putting on a flawless clinic as DOOM spits on the track.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/IeJjFzpINOA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/IeJjFzpINOA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/IeJjFzpINOA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "ThrasherMagazine",
            "liveBroadcastContent": "none",
            "publishTime": "2023-02-17T17:10:05Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "9sl9zFAYHX9_ReWz_A0f79mus3A",
        "id": {
            "kind": "youtube#video",
            "videoId": "_-iSI201yDY"
        },
        "snippet": {
            "publishedAt": "2023-03-03T17:00:21Z",
            "channelId": "UCt16NSYjauKclK67LCXvQyA",
            "title": "Fabiana Delfino&#39;s &quot;Santa Cruz&quot; Part",
            "description": "Fabi puts it all on the line, combining gut-wrenching slams with high-impact bank hits. Skate and Destroy. Keep up with Thrasher ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/_-iSI201yDY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/_-iSI201yDY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/_-iSI201yDY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "ThrasherMagazine",
            "liveBroadcastContent": "none",
            "publishTime": "2023-03-03T17:00:21Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "4vPH0Vma--eAavKZVAV_CJQppX0",
        "id": {
            "kind": "youtube#video",
            "videoId": "IpZJVMgH2WE"
        },
        "snippet": {
            "publishedAt": "2022-10-31T19:55:19Z",
            "channelId": "UCt16NSYjauKclK67LCXvQyA",
            "title": "Halloween Hellbomb 2022 Video",
            "description": "The Halloween Hellbomb is back and bigger than ever, with more killer moves and casualties than you can calculate. Celebrate ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/IpZJVMgH2WE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/IpZJVMgH2WE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/IpZJVMgH2WE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "ThrasherMagazine",
            "liveBroadcastContent": "none",
            "publishTime": "2022-10-31T19:55:19Z"
        }
    }
]




const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  // const [cars, setCars] = useState([]);
  const [videos, setVideos] = useState(defaultVideos);

  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //       setCars(response.data);
  //     } catch (error) {
  //       console.log(error.response.data);
  //     }
  //   };
  //   fetchCars();
  // }, [token]);


  return (
    <div className="container">
      <SearchBar setVideos = {setVideos}/>
      <div class = 'homepagevideocontainer parent' >
        {videos.map((video) => {
          return(
          <div class = "child" >
            <Link to = {`/video/${video.id.videoId}`}>
              <img src={video.snippet.thumbnails.medium.url}/>
              <p class = "videotitle" maxlength="10"> {video.snippet.title}</p>
            </Link>
          </div> 
          )
        })} 
      </div>
    </div>
  );
};

export default HomePage;
