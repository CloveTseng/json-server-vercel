# 大家一起 json-server
[API 文件](https://www.apidog.com/apidoc/shared/1b58d0d4-a7cf-4f06-8c40-d1c8db1db8c0/all-posts-12779922e0)
<summary>Table of Contents</summary>

- [怎麼開始](#第一步---clone-repo)
- [建立新 json 檔](#第二步---資料夾及檔案說明)
- [新增與更新資料](#新增資料的話)


### 第一步 - clone repo
* 點擊 `code` 按鈕複製 url
![clone-repo](https://firebasestorage.googleapis.com/v0/b/mobaocoffee.appspot.com/o/clonerepo.png?alt=media&token=74a25d62-4cb2-4e6a-99ec-8cfd8b4a0fc6)

* 到本地端 (自己的電腦) 下載這個 repo 之後，開啟這個資料夾 
![](https://firebasestorage.googleapis.com/v0/b/mobaocoffee.appspot.com/o/gitclone.png?alt=media&token=85c0e043-b6ea-473a-8022-86ecb899b901)

### 第二步 - 資料夾及檔案說明
* 開啟檔案後找到 data 資料夾，裡面就是存放各個 `.json` 資料的地方
![data-json](https://firebasestorage.googleapis.com/v0/b/mobaocoffee.appspot.com/o/data-json.png?alt=media&token=473a0a71-b773-485c-b0e4-0c3851abc7b0)

* 新增檔案之前可以先建立分支來增加自己需要的 data
* 新增檔案的規則，檔名依 `json-server` 的規定必需要加上 `s`，例如 `users.json` `posts.json` ...他可以自己去讀取到不同檔案的內容。(所以這裡不需要 db.json)
* `.json` 檔案裡面也有相應的格式需要依循：格式必需要是 `物件` 包 `陣列` 包 `物件` 的形式。<br/>
    ```json
    {
        [
            {},
            {}
        ]
    }
    ```
    <img src="https://firebasestorage.googleapis.com/v0/b/mobaocoffee.appspot.com/o/jsondata.png?alt=media&token=e7c7f8d3-0096-4949-ba89-2f9e6021a319" width="300px">

### 第三步 - json 檔寫好了然後呢？
* 推送分支
* 發 PR 給我沒問題之後，就會幫你重啟 Render 囉~

---
## 新增資料的話
可以使用 postman 進行資料的測試，或是打 API 發送相關請求就可以新增、修改或刪除資料。<br/>
因為有寫自動備份，所以資料會寫入 data 下的相應檔案內。
