const todos = [
  {
    title: "title",
    description: "description",
    link: "https://qwert.com",
    author: "author",
    staff: "staff",
  },
  {
    title: "title 2",
    description: "description 2",
    link: "https://qwert.com",
    author: "author",
    staff: "staff",
  },
  {
    title: "title 3",
    description: "description 3",
    link: "https://qwert.com",
    author: "author",
    staff: "staff",
  },
  {
    title: "title 4",
    description: "description 4",
    link: "https://qwert.com",
    author: "author 4",
    staff: "staff 4",
  },
  {
    title: "title 5",
    description: "description 5",
    link: "https://qwert.com",
    author: "auhor 5",
    staff: "staff 5",
  },
]


export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div className="m-[5rem]">
        {
          todos.map((todo, i) => {
            return(
                  <div key={i} className="border-4 p-4">
                    <h1>{todo.title}</h1>
                    <p>{todo.description}</p>
                    <div>{todo.link}</div>
                    <div>{todo.author}</div>
                    <div>{todo.staff}</div>
                  </div>
            )
          })
        }
        <div>-----</div>
     

      </div>
    </div>
  );
}




