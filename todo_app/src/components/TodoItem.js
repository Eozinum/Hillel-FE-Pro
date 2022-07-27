export default function TodoItem({ todoItem, onTodoDelete, onTodoUpdate }) {
  const { id, completed, title } = todoItem;
  return (
    <li style={{ backgroundColor: getStyle(completed) }} onClick={() => onTodoUpdate(id)}>
      {title}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onTodoDelete(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}

const getStyle = (completed) => {
  return completed ? 'rgb(247, 144, 144)' : 'rgb(172, 239, 203)';
};
