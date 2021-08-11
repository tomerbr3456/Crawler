import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  cardContainer: {
    position: "relative",
    height: 430,
    width: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    borderRadius: "30px",
    border: "5px solid black",
    marginBottom: 20,
  },
  img: {
    height: "50%",
    position: "absolute",
    width: "90%",
    left: "5%",
    top: "2.5%",
    borderRadius: "30px",
    border: "1px solid #fff",
    boxShadow: "1px 1px 1px 1px #888888",
  },
  title: {
    position: "absolute",
    top: "60%",
    left: "3%",
    height: 50,
    fontSize: 14,
  },
  price: {
    position: "absolute",
    top: "73%",
    left: "3%",
    height: 30,
    fontSize: 20,
  },
  shipping: {
    position: "absolute",
    top: "82%",
    left: "3%",
    height: 30,
    color: "gray",
  },
  shipsfrom: {
    position: "absolute",
    top: "90%",
    left: "3%",
    height: 30,
    color: "gray",
  },
});

export const Card = (props) => {
  const { data } = props;
  const classes = useStyles();
  return (
    <>
      <div className={classes.cardContainer}>
        <img className={classes.img} src={data.image} alt="" />
        <div className={classes.title}>{data.title}</div>
        <div className={classes.price}>{data.price}</div>
        <div className={classes.shipping}>{data.shipping}</div>
        <div className={classes.shipsfrom}>{data.shipsfrom}</div>
      </div>
    </>
  );
};
