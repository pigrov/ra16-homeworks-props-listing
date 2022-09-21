import Star from "./Star";

function Stars(props) {
  const { count } = props;

  return (
    <ul className="card-body-stars u-clearfix">
      <Star count={count} />
    </ul>
  );
}

Stars.defaultProps = {
  count: 0,
};

export default Stars;
