const StudentCard = ({ imgUrl, about, name, depColor}) => {
    const styles = {
        card: {
            width: "300px",
            height: "400px",
            border: `1px solid ${depColor || blue}`,
            borderRadius: "10px",
            margin: "10px",
            padding: "10px"       
         },
        img: {
            width: "50%",
            height: "50%",
            borderRadius: "50%",
            margin: "auto"
        },
        name: {
            fontSize: "20px",
            fontWeight: "bold",
            color: depColor || blue
        }
    }

    return (
        <div style={styles.card}>
            <h1 style={styles.name}>{name}</h1>
            <img
             style={styles.img}
             src={
                imgUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNq_trcGmu1SrRDwMqlsdNySjhvcUDdNzWhg&s"} alt="" />
             <p>{about}</p>
             <h1>Hello World</h1>
        </div>
    )
}

export default StudentCard;