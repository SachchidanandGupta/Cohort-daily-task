const reelsData = [
  {
    profileName: "Stark@instagram",
    profileImage: "https://i.pinimg.com/736x/bc/77/6a/bc776a402483d56ae6213783316eff18.jpg",
    video: "./videos/video1.mp4",
    caption: "let's do the shit in which people cry ",
    likeCount: 200,
    commentCount: 120,
    shareCount: 45,
    isLiked: false,
    isFollowed: false
  },
  {
    profileName: "CreativeSoul",
    profileImage: "https://i.pinimg.com/736x/2c/36/88/2c3688d7e305ec9057d76f2d0e567e4a.jpg",
   video: "./videos/video2.mp4",
    caption: "Life is better when you're creating something new ✨",
    likeCount: 1340,
    commentCount: 322,
    shareCount: 98,
    isLiked: true,
    isFollowed: true
  },
  {
    profileName: "TravelVibes",
    profileImage: "https://i.pinimg.com/736x/95/c8/e4/95c8e4eefeea1047a0e4b9c2754d6e2f.jpg",
    video: "./videos/video3.mp4",
    caption: "Lost in the right direction 🌍",
    likeCount: 987,
    commentCount: 210,
    shareCount: 65,
    isLiked: false,
    isFollowed: false
  },
  {
    profileName: "CodeDaily",
    profileImage: "https://i.pinimg.com/736x/c6/76/c1/c676c1cd38fb6768578ebc0b51a5045a.jpg",
    video: "./videos/video4.mp4",
    caption: "Write code. Break things. Learn faster 💻",
    likeCount: 2560,
    commentCount: 410,
    shareCount: 180,
    isLiked: true,
    isFollowed: false
  },
  {
    profileName: "FoodieLife",
    profileImage: "https://i.pinimg.com/736x/f6/18/02/f61802b981b0a29980cb2ded9fe17b90.jpg",
    video: "./videos/video5.mp4",
    caption: "Good food, good mood 🍕",
    likeCount: 1789,
    commentCount: 289,
    shareCount: 120,
    isLiked: false,
    isFollowed: true
  },
  {
    profileName: "FitJourney",
    profileImage: "https://i.pinimg.com/1200x/12/b4/f6/12b4f64feeac5f488f3e82d0d2493e95.jpg",
    video: "./videos/video6.mp4",
    caption: "No excuses. Just results 💪",
    likeCount: 3012,
    commentCount: 540,
    shareCount: 210,
    isLiked: true,
    isFollowed: true
  },
  {
    profileName: "ArtisticMind",
    profileImage: "https://i.pinimg.com/736x/0f/1e/7d/0f1e7d591c85fce8524d9181f6d3433f.jpg",
    video: "./videos/video7.mp4",
    caption: "Art speaks when words are silent 🎨",
    likeCount: 842,
    commentCount: 150,
    shareCount: 70,
    isLiked: false,
    isFollowed: false
  },
  {
    profileName: "TechTalks",
    profileImage: "https://i.pinimg.com/736x/4f/81/f9/4f81f959f4e2caa62b26afaa0c49e212.jpg",
    video: "./videos/video8.mp4",
    caption: "Tech is best when it brings people together 🤖",
    likeCount: 2190,
    commentCount: 330,
    shareCount: 145,
    isLiked: true,
    isFollowed: false
  },
  {
    profileName: "MusicVibes",
    profileImage: "https://i.pinimg.com/1200x/8c/ed/8b/8ced8bc8d614ec5de5efaeb6308a313d.jpg",
    video: "./videos/video9.mp4",
    caption: "Turn the volume up 🎧",
    likeCount: 1650,
    commentCount: 275,
    shareCount: 110,
    isLiked: false,
    isFollowed: true
  },
  {
    profileName: "NatureLover",
    profileImage: "https://i.pinimg.com/1200x/7d/9a/0e/7d9a0e45d91710a50c3bfc409f605b45.jpg",
    video: "./videos/video10.mp4",
    caption: "Breathe in nature, breathe out stress 🌿",
    likeCount: 930,
    commentCount: 160,
    shareCount: 55,
    isLiked: false,
    isFollowed: false
  }
];
var sum = '';
reelsData.forEach(function(elem){
   sum = sum + ` <div class="reels">
            <video src="${elem.video}" autoplay loop muted controls></video>
            <div class="admin-details">
            <div class="profile">
              <div class="profile-img">
                <div class="img-container">
                  <img
                    src="${elem.profileImage}"
                    alt=""
                    class="pfp"
                  />
                </div>
                <h3>${elem.profileName}</h3>
              </div>
              <button class="follow">${elem.isFollowed?"Unfollow":"follow"}</button>
            </div>
            <h3 class="caption">
              ${elem.caption}
            </h3>
          </div>
          <div class="engage">
            <div class="like-icon icon">${elem.isLiked?'<i class=" like ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</div>
            <h3>${elem.likeCount}</h3>
            <div class="comment-icon icon"><i class="ri-chat-3-line"></i></div>
            <h3>${elem.commentCount}</h3>
            <div class="share-icon icon">
              <i class="ri-share-forward-line"></i>
            </div>
            <h3>${elem.shareCount}</h3>
            <div class="like-icon icon"><i class="ri-more-2-line"></i></div>
          </div>
          </div>`;
    
})


var reelsContainer = document.querySelector('#reels-container');
 reelsContainer.innerHTML = sum;