import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Navbar.css";

import React, { useState } from 'react';
import FileUploader from './Files/FileUploader';
import FolderCreator from './Files/FolderCreator';
import SearchFile from './Files/SearchFile';

function Sidebar({ tag }) {
    const [showUploader, setShowUploader] = useState(false);
    // const [activeMenu, setActiveMenu] = useState(null);
    const [showFileUploader, setShowFileUploader] = useState(false);
    const [showFolderCreator, setShowFolderCreator] = useState(false);

    const handleButtonClick = () => {
        setShowUploader(!showUploader);
        setShowFileUploader(false);
        setShowFolderCreator(false);
    };

    const handleFileUploaderToggle = () => {
        setShowFileUploader(!showFileUploader);
    }

    return (
        <div class="col-2 row- bd-sidebar">
            <ul class="nav">
                <li className="active">
                    <button
                        className="btn btn-success upload"
                        type="submit"
                        onClick={handleButtonClick}
                    >
                        + 새로 만들기
                    </button>
                    {showUploader && (
                        <ul className="upload-options">
                            <li><a href="#!" onClick={handleFileUploaderToggle}>파일 업로드</a></li>
                            <li><a href="/folders"> 새 폴더 만들기 </a></li>
                        </ul>
                    )}
                </li>
                <li className={`menu ${tag === "drive" ? "highlight" : ""}`}><a href="/files">내 드라이브</a></li>
                <li className={`menu ${tag === "mypage" ? "highlight" : ""}`}><a href="/mypage">마이페이지</a></li>
                <li className={`menu ${tag === "grouppage" ? "highlight" : ""}`}><a href="/GroupPage">그룹</a></li>
                <li className={`menu ${tag === "trash" ? "highlight" : ""}`}><a href="/trash">휴지통</a></li>
            </ul>
            {showFileUploader && <FileUploader />}
            {showFolderCreator && <FolderCreator />}
        </div>
    );
}

function Topbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg ">
                <a class="navbar-brand" href="/files">KHUBox</a>
                <SearchFile />
            </nav>
        </div>
    );
}

function NavBar({ tag }) {
    return (
        <>
            <Topbar />
            <Sidebar tag={tag} />
        </>
    );
}

export default NavBar;
