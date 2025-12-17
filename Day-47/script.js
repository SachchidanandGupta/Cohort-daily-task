const users = [
  {
    userName: "Aarav Patel",
    jobRole: "Frontend Developer",
    description: "Passionate about building responsive and accessible web interfaces using modern JavaScript frameworks.",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    tags: ["JavaScript", "React", "CSS", "UI/UX"]
  },
  {
    userName: "Sophia Martinez",
    jobRole: "Product Manager",
    description: "Experienced in leading cross-functional teams to deliver customer-centric digital products.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    tags: ["Product Strategy", "Agile", "Leadership", "Roadmaps"]
  },
  {
    userName: "Daniel Kim",
    jobRole: "Backend Engineer",
    description: "Specializes in scalable APIs, database design, and cloud-native architectures.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    tags: ["Node.js", "Databases", "AWS", "APIs"]
  },
  {
    userName: "Emily Johnson",
    jobRole: "UX Designer",
    description: "Designs intuitive user experiences through research, wireframing, and usability testing.",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    tags: ["UX Research", "Figma", "Prototyping", "Design Systems"]
  },
  {
    userName: "Mohammed Ali",
    jobRole: "Data Scientist",
    description: "Turns complex data into actionable insights using statistics and machine learning.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    tags: ["Python", "Machine Learning", "Data Analysis", "AI"]
  }
];
var main = document.querySelector("main");
var sum = '';
users.forEach(function(elem){
     sum = sum + ` <div class="card">
              <img src= "${elem.image}" alt="">
              <h2>${elem.userName}</h2>
              <h3>${elem.jobRole}</h3>
              <p>${elem.description}</p>
        </div>`
});
main.innerHTML = sum;

