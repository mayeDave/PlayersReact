import StudentCard from "./StudentCard";

const StaffList = () => {
    const staffs = [
        {
          name: "Bola Ahmed Tinubu",
          imgUrl: "https://nationaleconomy.com/wp-content/uploads/2024/03/Tinubu-jpeg.webp",
          about: "Alice is a creative graphic designer with a keen eye for detail.",
          depColor: "#FF5733", // Design
        },
        {
          name: "Aliko Dangote",
          imgUrl: "https://i0.wp.com/entrepreneurs.ng/wp-content/uploads/2018/07/Aliko.jpg?fit=660%2C883&ssl=1",
          about: "Bob is a software engineer specializing in backend systems.",
          depColor: "#33FF57", // Engineering
        },
        {
          name: "Kashim Shettima",
          imgUrl: "https://cdn.vanguardngr.com/wp-content/uploads/2024/02/Shettima-e1707358547563.jpg",
          about: "Charlie is an experienced project manager leading agile teams.",
          depColor: "#3357FF", // Management
        },
        {
          name: "Dino Melaye",
          imgUrl: "https://politiciansdata.com/wp-content/uploads/2018/05/sTqmhMVo_400x400.jpg",
          about: "Diana is a talented UX designer who creates intuitive interfaces.",
          depColor: "#FFC300", // UX Design
        },
        {
          name: "Yahaya Bello",
          imgUrl: "https://findcribs.ng/blog/wp-content/uploads/2024/04/IMG_4985.jpeg",
          about: "Edward is a data analyst passionate about data-driven decisions.",
          depColor: "#900C3F", // Analytics
        },
        {
          name: "Nyesom Wike",
          imgUrl: "https://media.premiumtimesng.com/wp-content/files/2023/09/eff9f4b0-9253-11ed-84c7-697fffd240d6-1.jpg",
          about: "Fiona is a DevOps engineer focused on automation and deployment.",
          depColor: "#28B463", // DevOps
        },
        {
          name: "Hope Uzodinma",
          imgUrl: "https://pbs.twimg.com/profile_images/1386022203754532873/430xyrLO_400x400.jpg",
          about: "George is a cybersecurity expert ensuring digital safety.",
          depColor: "#581845", // Security
        },
        {
          name: "Ned Nwoko",
          imgUrl: "https://dailypost.ng/wp-content/uploads/2024/09/IMG-20240901-WA0040.jpg",
          about: "Hannah is a QA engineer dedicated to ensuring software quality.",
          depColor: "#FF33A8", // QA
        },
        {
          name: "Femi Gbajabiamila",
          imgUrl: "https://guardian.ng/wp-content/uploads/2023/12/Gbajabiamila.png",
          about: "Ian is a cloud architect with expertise in AWS and Azure.",
          depColor: "#1C2833", // Cloud
        },
        {
          name: "Muhammadu Buhari",
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMIsX0hh-Z7ELZRVHjiNco1_atWaywcRv-w&s",
          about: "Jessica is a technical writer simplifying complex topics.",
          depColor: "#FFC0CB", // Documentation
        },
        {
          name: "Abdullahi Adamu",
          imgUrl: "https://dailytrust.com/wp-content/uploads/2023/05/Senator-Abdullahi-Adamu.jpg",
          about: "Kevin is a mobile developer building user-friendly apps.",
          depColor: "#006400", // Mobile
        },
        {
          name: "Adams Oshiomole",
          imgUrl: "https://2.bp.blogspot.com/-Dhakk6RqllI/Uvzl4KAHYeI/AAAAAAAChgo/CyRDopJ85vY/s1600/Oshiomhole1.jpg",
          about: "Lily is a business analyst skilled in gathering requirements.",
          depColor: "#FFD700", // Business
        },
        {
          name: "Godwin Emefiele",
          imgUrl: "https://cdn.punchng.com/wp-content/uploads/2022/11/18092356/CBN-Governor-Godwin-Emefiele.jpg",
          about: "Michael is a database administrator managing large data sets.",
          depColor: "#800000", // Database
        },
        {
          name: "Olusegun Obasanjo",  
          imgUrl: "https://images.theconversation.com/files/455482/original/file-20220331-25-v46ioh.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip",
          about: "Nina is a marketing expert with a focus on digital campaigns.",
          depColor: "#33FFBD", // Marketing
        },
        {
          name: "Jagaban",
          imgUrl: "https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/Tinubu-7.jpg",
          about: "Oscar is a machine learning engineer building AI solutions.",
          depColor: "#FF4500", // AI
        },
      ];

      const styles = {
        grid: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }
      }
      
      
  return (
    <div style={styles.grid}>
        {staffs.map((staff) => (
            <StudentCard
            key={staff.name}
            name={staff.name}
            about={staff.about}
            imgUrl={staff.imgUrl}
            depColor={staff.depColor}
            />
            
        ))}  
        
    </div>
  )
}

export default StaffList