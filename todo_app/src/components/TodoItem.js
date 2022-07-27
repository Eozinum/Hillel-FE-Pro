export default function TodoItem({ todoItem, onItemDelete, onTodoUpdate }) {
  const { id, completed, title } = todoItem;
  return (
    <li style={{ backgroundColor: getStyle(completed) }} onClick={() => onTodoUpdate(id)}>
      {title}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onItemDelete(id);
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
