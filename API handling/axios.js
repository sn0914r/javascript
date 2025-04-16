import axios from 'axios'
// GET
async function getPost() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      console.log(response.data);
    } catch (error) {
      console.error('Error at get:', error.message);
    }
}

getPost()

// POST
async function postData() {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      userId: 101,
      title: "new post title",
      body: "new post body",
      id: 101
    });
    console.log(response.data); 
  } catch (error) {
    console.error('Error at post:', error.message);
  }
}
postData()

// PUT
async function putData() {
  try {
    const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
      userId: 1,
      title: "updated post",
      body: "updated body",
      id: 12
    });
    console.log(response.data); 
  } catch (error) {
    console.error('Error at put:', error.message);
  }
}
putData()

// PATCH
async function patchData() {
  try {
    const response = await axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
      title: "updated title with patch",
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error at patch:', error.message);
  }
}

patchData();

// DELETE
async function deletData() {
  try {
    await axios.delete('https://jsonplaceholder.typicode.com/posts/1')
  } catch (error) {
    console.error('Error at delete:', error.message);
  }
}
deletData()