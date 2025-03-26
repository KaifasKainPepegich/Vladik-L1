export default function WayToTeach({ title, description }) {
  return (
    <li>
      <p>
        {/* TODO  избавиться от strong, сделать через class */}
        <strong>{title} </strong> {description}
      </p>
    </li>
  )
}
