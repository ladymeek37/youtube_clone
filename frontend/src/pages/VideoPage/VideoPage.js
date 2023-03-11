import axios from 'axios';
import React,{useState}from 'react';
import { useParams } from 'react-router-dom';
import CommentsList from '../../components/CommentList/CommentList';
import CommentsSection from '../../components/CommentsSection/CommentsSection';
import RelatedVideosMapper from '../../components/RelatedVideosMapper/RelatedVideosMapper';

const VideoPage = () => {
    const {videoId} = useParams()
    const [video, setVideo] = useState({
        "kind": "youtube#video",
        "etag": "CoTBLs4cRowTvNN0U1J1kDw5jws",
        "id": "JnhIiMBdK_c",
        "snippet": {
            "publishedAt": "2023-03-06T17:10:04Z",
            "channelId": "UCt16NSYjauKclK67LCXvQyA",
            "title": "Foundation's \"Whippersnappers\" Video",
            "description": "Keegan McCutchen sets the stage with his first part for the F Troop, followed by a barrage of heavy rips from the whole squad. Aidan Campbell earns the curtain call with a jaw-dropping offering for the ages. \r\n\r\nKeep up with Thrasher Magazine here:\r\nhttp://www.thrashermagazine.com\r\nhttp://www.facebook.com/thrashermagazine\r\nhttp://www.instagram.com/thrashermag\r\nhttp://www.twitter.com/thrashermag",
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
                },
                "standard": {
                    "url": "https://i.ytimg.com/vi/JnhIiMBdK_c/sddefault.jpg",
                    "width": 640,
                    "height": 480
                },
                "maxres": {
                    "url": "https://i.ytimg.com/vi/JnhIiMBdK_c/maxresdefault.jpg",
                    "width": 1280,
                    "height": 720
                }
            },
            "channelTitle": "ThrasherMagazine",
            "tags": [
                "Thrasher",
                "Magazine",
                "Thrasher Magazine",
                "King Of The Road",
                "Firing Line",
                "Double Rock",
                "Skateboarding",
                "Skate",
                "Kickflip",
                "Hall of Meat",
                "Full Part"
            ],
            "categoryId": "17",
            "liveBroadcastContent": "none",
            "defaultLanguage": "en",
            "localized": {
                "title": "Foundation's \"Whippersnappers\" Video",
                "description": "Keegan McCutchen sets the stage with his first part for the F Troop, followed by a barrage of heavy rips from the whole squad. Aidan Campbell earns the curtain call with a jaw-dropping offering for the ages. \r\n\r\nKeep up with Thrasher Magazine here:\r\nhttp://www.thrashermagazine.com\r\nhttp://www.facebook.com/thrashermagazine\r\nhttp://www.instagram.com/thrashermag\r\nhttp://www.twitter.com/thrashermag"
            },
            "defaultAudioLanguage": "en-US"
        }
    })
    const [relatedVideos, setRelatedVideos] = useState([])

    const getVideoByVidID = async() => {
        await axios
        .get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyD52HNqidEvinYxxLhaIq9FRt-l57Dc6EI&part=snippet`)
        .then(response => setVideo(response.data.items[0]))
    }

    const getRelatedVideos = async() => {
        await axios
        .get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=AIzaSyD52HNqidEvinYxxLhaIq9FRt-l57Dc6EI&part=snippet`)
        .then(response => {setRelatedVideos(response.data.items);console.log(response.data.items)})
      
    }




    return(
        <div>
            <div>
                <button onClick={()=>getVideoByVidID()}>Click for vid</button>
                <h1>{video.snippet&&video.snippet.title}</h1> 
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameborder="0"></iframe>
                {/* short circuit evaulation */}
            </div>
            <div>
                <button onClick={() => getRelatedVideos()}>Get Related Videos</button>
                <h1>Related Videos:</h1>
                <RelatedVideosMapper videos = {relatedVideos}/>
                <p class = "videotitle" maxlength="10"> {video.snippet.title}</p>
            </div>
            <div>
                <CommentsSection video = {videoId}/>
            </div>
        </div>
    )}

export default VideoPage