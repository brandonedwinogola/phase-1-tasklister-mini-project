document.addEventListener("DOMContentLoaded", () => {
            console.log(document.querySelector('form'))
            document.querySelector('form').addEventListener('submit', (e) => {
                    e.preventDefault()
                    handleToDo(e.target.new_todo.value)
                }
            });

        function handleToDo(todo) {
            let p = document.createElement('p')
            p.textContent = todo
            document.querySelector('#todo_container').appendChild('ps')
        }