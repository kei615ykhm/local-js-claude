// メイン処理の非同期関数を定義
async function fetchUserInfo() {
  // ユーザー情報の取得（DOM要素の取得）
  const userId = document.getElementById('userId').value;
  const loadingElement = document.getElementById('loading');
  const errorElement = document.getElementById('error');
  const userInfoElement = document.getElementById('userInfo');

  // UIの初期化
  loadingElement.style.display = 'block'; // ローディング表示
  errorElement.textContent = ''; // エラーメッセージの初期化
  userInfoElement.innerHTML = ''; // ユーザー情報の初期化

  try {
    // 非同期でAPIからユーザー情報を取得
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    // レスポンスのステータスをチェック
    if (!response.ok) {
      throw new Error('ユーザー情報の取得に失敗しました');
    }

    // JSONデータをオブジェクトに変換（非同期処理）
    const userData = await response.json();
    displayUserInfo(userData);
  } catch (error) {
    // エラーハンドリング
    errorElement.textContent = `エラー: ${error.message}`;
  } finally {
    // ローディング表示を非表示にする（成功・失敗に関わらず）
    loadingElement.style.display = 'none';
  }
}

// ユーザー情報を表示する関数
function displayUserInfo(userData) {
  const userInfoElement = document.getElementById('userInfo');
  // テンプレートリテラルを使用してHTMLの文字列を生成する
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
