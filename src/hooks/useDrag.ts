export const useDrag = () => {
  const dragStartHandler = (
    event: React.DragEvent<HTMLDivElement>,
    data: string
  ): void => {
    event.dataTransfer.setData("text", data);
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    console.log("on drag over");
    event.preventDefault();
    event.stopPropagation();
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    event.stopPropagation();
  };

  const onDragEnd = (event: React.DragEvent<HTMLDivElement>): void => {
    const id = event.dataTransfer.getData("id");
    console.log(id);
    event.preventDefault();
    event.stopPropagation();
  };

  return [dragStartHandler, onDrop, onDragOver, onDragEnd];
};
