async function fetchUserInfo() {
  const userId = document.getElementById('userId').value;
  const loadingElement = document.getElementById('loading');
  const errorElement = document.getElementById('error');
  const userInfoElement = document.getElementById('userInfo');

  loadingElement.style.display = 'block';
  errorElement.textContent = '';
  userInfoElement.innerHTML = '';

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      throw new Error('ユーザー情報の取得に失敗しました');
    }
    const userData = await response.json();
    displayUserInfo(userData);
  } catch (error) {
    errorElement.textContent = `エラー: ${error.message}`;
  } finally {
    loadingElement.style.display = 'none';
  }
}

function displayUserInfo(userData) {
  const userInfoElement = document.getElementById('userInfo');
  userInfoElement.innerHTML = `
    <h2>${userData.name}</h2>
    <p><strong>ユーザー名:</strong> ${userData.username}</p>
    <p><strong>メール:</strong> ${userData.email}</p>
    <p><strong>電話:</strong> ${userData.phone}</p>
    <p><strong>ウェブサイト:</strong> ${userData.website}</p>
  `;
}

// 初回読み込み時にユーザー情報を取得
fetchUserInfo();
