import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/bootstrap.min.css";
// import "./css/vendor/bicon.min.css";
// import "./css/vendor/flaticon.css";
// import "./css/plugins/plyr.css";
// import "./css/plugins/slick.min.css";
// import "./css/plugins/nice-select.css";
// import "./css/plugins/perfect-scrollbar.css";
// import "./css/plugins/lightgallery.min.css";
import "./css/style.css";

const Profile = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let idd = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch(
      `http://localhost:5000/community/community/${idd}`,
      {
        method: "Get",
      }
    );
    result = await result.json();
    console.log(result, "kkkkk");
    console.log(result.chats);
    if (result) {
      setProducts(result);
    }
  };
  return (
    <main>
      {/* {products.chats.map(({sent_by, description}, index) => (
        <h1 key={index}>{sent_by},{description}</h1>
      ))} */}
      <div class="main-wrapper">
        <h1>Adda-Group</h1>
        <div class="container pt-3">
          <div class="row">
            <div class="col-lg-3 order-2 order-lg-1">
              <aside class="widget-area profile-sidebar">
                {/* widget single item start */}
                <div class="card widget-item">
                  <h4 class="widget-title">{products.name}</h4>
                  <div class="widget-body">
                    <div class="about-author">
                      <p>{products.description}</p>
                      <ul class="author-into-list">
                        <li>
                          <a href="#">
                            <i class="bi bi-office-bag"></i>
                            {products.state}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="bi bi-home"></i>
                            {products.location}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Likes:
                            <i class="bi bi-location-pointer"></i>
                            {products.likes}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="bi bi-heart-beat"></i>
                            {products.organizer}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="bi bi-heart-beat"></i>
                            {products.city}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="bi bi-heart-beat"></i>
                            {products.country}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* widget single item end */}

                {/* widget single item start */}
                <div class="card widget-item">
                  <h4 class="widget-title">Sweets Memories</h4>
                  <div class="widget-body">
                    <div class="sweet-galley img-gallery">
                      <div class="row row-5">
                        <div class="col-4">
                          <div class="gallery-tem">
                            <figure class="post-thumb">
                              <a
                                class="gallery-selector"
                                href="/assets/images/adda/gallery/gallery-1.jpg"
                              >
                                <img
                                  src="/assets/images/adda/gallery/gallery-1.jpg"
                                  alt="sweet memory"
                                />
                              </a>
                            </figure>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="gallery-tem">
                            <figure class="post-thumb">
                              <a
                                class="gallery-selector"
                                href="/assets/images/adda/gallery/gallery-2.jpg"
                              >
                                <img
                                  src="/assets/images/adda/gallery/gallery-2.jpg"
                                  alt="sweet memory"
                                />
                              </a>
                            </figure>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="gallery-tem">
                            <figure class="post-thumb">
                              <a
                                class="gallery-selector"
                                href="/assets/images/adda/gallery/gallery-3.jpg"
                              >
                                <img
                                  src="/assets/images/adda/gallery/gallery-3.jpg"
                                  alt="sweet memory"
                                />
                              </a>
                            </figure>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="gallery-tem">
                            <figure class="post-thumb">
                              <a
                                class="gallery-selector"
                                href="/assets/images/adda/gallery/gallery-4.jpg"
                              >
                                <img
                                  src="/assets/images/adda/gallery/gallery-4.jpg"
                                  alt="sweet memory"
                                />
                              </a>
                            </figure>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="gallery-tem">
                            <figure class="post-thumb">
                              <a
                                class="gallery-selector"
                                href="/assets/images/adda/gallery/gallery-5.jpg"
                              >
                                <img
                                  src="/assets/images/adda/gallery/gallery-5.jpg"
                                  alt="sweet memory"
                                />
                              </a>
                            </figure>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="gallery-tem">
                            <figure class="post-thumb">
                              <a
                                class="gallery-selector"
                                href="/assets/images/adda/gallery/gallery-6.jpg"
                              >
                                <img
                                  src="/assets/images/adda/gallery/gallery-6.jpg"
                                  alt="sweet memory"
                                />
                              </a>
                            </figure>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="gallery-tem">
                            <figure class="post-thumb">
                              <a
                                class="gallery-selector"
                                href="/assets/images/adda/gallery/gallery-7.jpg"
                              >
                                <img
                                  src="/assets/images/adda/gallery/gallery-7.jpg"
                                  alt="sweet memory"
                                />
                              </a>
                            </figure>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="gallery-tem">
                            <figure class="post-thumb">
                              <a
                                class="gallery-selector"
                                href="/assets/images/adda/gallery/gallery-8.jpg"
                              >
                                <img
                                  src="/assets/images/adda/gallery/gallery-8.jpg"
                                  alt="sweet memory"
                                />
                              </a>
                            </figure>
                          </div>
                        </div>
                        <div class="col-4">
                          <div class="gallery-tem">
                            <figure class="post-thumb">
                              <a
                                class="gallery-selector"
                                href="/assets/images/adda/gallery/gallery-9.jpg"
                              >
                                <img
                                  src="/assets/images/adda/gallery/gallery-9.jpg"
                                  alt="sweet memory"
                                />
                              </a>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* widget single item end */}

                {/* widget single item start */}
                <div class="card widget-item">
                  <h4 class="widget-title">page you may like</h4>
                  <div class="widget-body">
                    <ul class="like-page-list-wrapper">
                      <li class="unorder-list">
                        {/* profile picture end */}
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img
                                src="/assets/images/adda/profile/profile-35x35-1.jpg"
                                alt="profile picture"
                              />
                            </figure>
                          </a>
                        </div>
                        {/* profile picture end */}

                        <div class="unorder-list-info">
                          <h3 class="list-title">
                            <a href="#">Travel The World</a>
                          </h3>
                          <p class="list-subtitle">
                            <a href="#">adventure</a>
                          </p>
                        </div>
                        <button class="like-button active">
                          <img
                            class="heart"
                            src="/assets/images/adda/icons/heart.png"
                            alt=""
                          />
                          <img
                            class="heart-color"
                            src="/assets/images/adda/icons/heart-color.png"
                            alt=""
                          />
                        </button>
                      </li>
                      <li class="unorder-list">
                        {/* profile picture end */}
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img
                                src="/assets/images/adda/profile/profile-35x35-11.jpg"
                                alt="profile picture"
                              />
                            </figure>
                          </a>
                        </div>
                        {/* profile picture end */}

                        <div class="unorder-list-info">
                          <h3 class="list-title">
                            <a href="#">Foodcort Nirala</a>
                          </h3>
                          <p class="list-subtitle">
                            <a href="#">food</a>
                          </p>
                        </div>
                        <button class="like-button">
                          <img
                            class="heart"
                            src="/assets/images/adda/icons/heart.png"
                            alt=""
                          />
                          <img
                            class="heart-color"
                            src="/assets/images/adda/icons/heart-color.png"
                            alt=""
                          />
                        </button>
                      </li>
                      <li class="unorder-list">
                        {/* profile picture end */}
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img
                                src="/assets/images/adda/profile/profile-35x35-15.jpg"
                                alt="profile picture"
                              />
                            </figure>
                          </a>
                        </div>
                        {/* profile picture end */}

                        <div class="unorder-list-info">
                          <h3 class="list-title">
                            <a href="#">Rolin Theitar</a>
                          </h3>
                          <p class="list-subtitle">
                            <a href="#">drama</a>
                          </p>
                        </div>
                        <button class="like-button">
                          <img
                            class="heart"
                            src="/assets/images/adda/icons/heart.png"
                            alt=""
                          />
                          <img
                            class="heart-color"
                            src="/assets/images/adda/icons/heart-color.png"
                            alt=""
                          />
                        </button>
                      </li>
                      <li class="unorder-list">
                        {/* profile picture end */}
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img
                                src="/assets/images/adda/profile/profile-35x35-18.jpg"
                                alt="profile picture"
                              />
                            </figure>
                          </a>
                        </div>
                        {/* profile picture end */}

                        <div class="unorder-list-info">
                          <h3 class="list-title">
                            <a href="#">Active Mind</a>
                          </h3>
                          <p class="list-subtitle">
                            <a href="#">fitness</a>
                          </p>
                        </div>
                        <button class="like-button">
                          <img
                            class="heart"
                            src="/assets/images/adda/icons/heart.png"
                            alt=""
                          />
                          <img
                            class="heart-color"
                            src="/assets/images/adda/icons/heart-color.png"
                            alt=""
                          />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* widget single item end */}
              </aside>
            </div>

            <div class="col-lg-6 order-1 order-lg-2">
              {/* share box start */}
              <div class="card card-small">
                <div class="share-box-inner">
                  {/* profile picture end */}
                  <div class="profile-thumb">
                    <a href="#">
                      <figure class="profile-thumb-middle">
                        <img
                          src="/assets/images/adda/profile/profile-small-37.jpg"
                          alt="profile picture"
                        />
                      </figure>
                    </a>
                  </div>
                  {/* profile picture end */}

                  {/* share content box start */}
                  <div class="share-content-box w-100">
                    <form class="share-text-box">
                      <textarea
                        name="share"
                        class="share-text-field"
                        aria-disabled="true"
                        placeholder="Say Something"
                        data-bs-toggle="modal"
                        data-bs-target="#textbox"
                        id="email"
                      ></textarea>
                      <button class="btn-share" type="submit">
                        share
                      </button>
                    </form>
                  </div>
                  {/* share content box end */}
                  {/* Modal start */}
                  <div
                    class="modal fade"
                    id="textbox"
                    aria-labelledby="textbox"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title">Share Your Mood</h5>
                          <button
                            type="button"
                            class="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body custom-scroll">
                          <textarea
                            name="share"
                            class="share-field-big custom-scroll"
                            placeholder="Say Something"
                          ></textarea>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="post-share-btn"
                            data-bs-dismiss="modal"
                          >
                            cancel
                          </button>
                          <button type="button" class="post-share-btn">
                            post
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Modal end */}
                </div>
              </div>
              {/* share box end */}

              {/* post status start */}
              {products.chats?.map((p, index) => (
                <div class="card">
                  {/* post title start */}
                  <div class="post-title d-flex align-items-center">
                    {/* profile picture end */}
                    {/* <div class="profile-thumb">
                    <a href="#">
                      <figure class="profile-thumb-middle">
                        <img
                          src="/assets/images/adda/profile/profile-small-25.jpg"
                          alt="profile picture"
                        />
                      </figure>
                    </a>
                  </div> */}
                    {/* profile picture end */}

                    <div class="posted-author">
                      <h6 class="author">
                        <a href="profile.html">{p.sent_by}</a>
                      </h6>
                      {/* <span class="post-time">35 min ago</span> */}
                    </div>

                    <div class="post-settings-bar">
                      <span></span>
                      <span></span>
                      <span></span>
                      <div class="post-settings arrow-shape">
                        <ul>
                          <li>
                            <button>copy link to profile</button>
                          </li>
                          <li>
                            <button>edit post</button>
                          </li>
                          <li>
                            <button>embed profile</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* post title start */}
                  <div class="post-content">
                    <p class="post-desc">{p.description}</p>
                  </div>
                </div>
              ))}
              <div class="card">
                {/* post title start */}
                <div class="post-title d-flex align-items-center">
                  {/* profile picture end */}
                  {/* <div class="profile-thumb">
                    <a href="#">
                      <figure class="profile-thumb-middle">
                        <img
                          src="/assets/images/adda/profile/profile-small-25.jpg"
                          alt="profile picture"
                        />
                      </figure>
                    </a>
                  </div> */}
                  {/* profile picture end */}

                  <div class="posted-author">
                    <h6 class="author">
                      <a href="profile.html"></a>
                    </h6>
                    <span class="post-time">35 min ago</span>
                  </div>

                  <div class="post-settings-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="post-settings arrow-shape">
                      <ul>
                        <li>
                          <button>copy link to profile</button>
                        </li>
                        <li>
                          <button>edit post</button>
                        </li>
                        <li>
                          <button>embed profile</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* post title start */}
                <div class="post-content">
                  <p class="post-desc">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy.
                  </p>
                  <div class="post-thumb-gallery img-gallery">
                    <div class="row g-0">
                      <div class="col-8">
                        <figure class="post-thumb">
                          <a
                            class="gallery-selector"
                            href="/assets/images/adda/post/post-2.jpg"
                          >
                            <img
                              src="/assets/images/adda/post/post-2.jpg"
                              alt="post image"
                            />
                          </a>
                        </figure>
                      </div>
                      <div class="col-4">
                        <div class="row">
                          <div class="col-12">
                            <figure class="post-thumb">
                              <a
                                class="gallery-selector"
                                href="/assets/images/adda/post/post-3.jpg"
                              >
                                <img
                                  src="/assets/images/adda/post/post-3.jpg"
                                  alt="post image"
                                />
                              </a>
                            </figure>
                          </div>
                          <div class="col-12">
                            <figure class="post-thumb">
                              <a
                                class="gallery-selector"
                                href="/assets/images/adda/post/post-4.jpg"
                              >
                                <img
                                  src="/assets/images/adda/post/post-4.jpg"
                                  alt="post image"
                                />
                              </a>
                            </figure>
                          </div>
                          <div class="col-12">
                            <figure class="post-thumb">
                              <a
                                class="gallery-selector"
                                href="/assets/images/adda/post/post-5.jpg"
                              >
                                <img
                                  src="/assets/images/adda/post/post-5.jpg"
                                  alt="post image"
                                />
                              </a>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="post-meta">
                    <button class="post-meta-like">
                      <i class="bi bi-heart-beat"></i>
                      <span>You and 207 people like this</span>
                      <strong>207</strong>
                    </button>
                    <ul class="comment-share-meta">
                      <li>
                        <button class="post-comment">
                          <i class="bi bi-chat-bubble"></i>
                          <span>41</span>
                        </button>
                      </li>
                      <li>
                        <button class="post-share">
                          <i class="bi bi-share"></i>
                          <span>07</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* post status end */}

              {/* post status start */}
              <div class="card">
                {/* post title start */}
                <div class="post-title d-flex align-items-center">
                  {/* profile picture end */}
                  <div class="profile-thumb">
                    <a href="#">
                      <figure class="profile-thumb-middle">
                        <img
                          src="/assets/images/adda/profile/profile-small-3.jpg"
                          alt="profile picture"
                        />
                      </figure>
                    </a>
                  </div>
                  {/* profile picture end */}

                  <div class="posted-author">
                    <h6 class="author">
                      <a href="profile.html">Jon Wileyam</a>
                    </h6>
                    <span class="post-time">15 min ago</span>
                  </div>

                  <div class="post-settings-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="post-settings arrow-shape">
                      <ul>
                        <li>
                          <button>copy link to profile</button>
                        </li>
                        <li>
                          <button>edit post</button>
                        </li>
                        <li>
                          <button>embed profile</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* post title start */}
                <div class="post-content">
                  <p class="post-desc pb-0">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for
                  </p>
                  <div class="post-meta">
                    <button class="post-meta-like">
                      <i class="bi bi-heart-beat"></i>
                      <span>You and 201 people like this</span>
                      <strong>201</strong>
                    </button>
                    <ul class="comment-share-meta">
                      <li>
                        <button class="post-comment">
                          <i class="bi bi-chat-bubble"></i>
                          <span>41</span>
                        </button>
                      </li>
                      <li>
                        <button class="post-share">
                          <i class="bi bi-share"></i>
                          <span>07</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* post status end */}

              {/* post status start */}
              <div class="card">
                {/* post title start */}
                <div class="post-title d-flex align-items-center">
                  {/* profile picture end */}
                  <div class="profile-thumb">
                    <a href="#">
                      <figure class="profile-thumb-middle">
                        <img
                          src="/assets/images/adda/profile/profile-small-4.jpg"
                          alt="profile picture"
                        />
                      </figure>
                    </a>
                  </div>
                  {/* profile picture end */}

                  <div class="posted-author">
                    <h6 class="author">
                      <a href="profile.html">william henry</a>
                    </h6>
                    <span class="post-time">35 min ago</span>
                  </div>

                  <div class="post-settings-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="post-settings arrow-shape">
                      <ul>
                        <li>
                          <button>copy link to profile</button>
                        </li>
                        <li>
                          <button>edit post</button>
                        </li>
                        <li>
                          <button>embed profile</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* post title start */}
                <div class="post-content">
                  <p class="post-desc">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy.
                  </p>
                  <div class="plyr__video-embed plyr-video">
                    <iframe
                      src="https://www.youtube.com/embed/WeA7edXsU40"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div class="post-meta">
                    <button class="post-meta-like">
                      <i class="bi bi-heart-beat"></i>
                      <span>You and 201 people like this</span>
                      <strong>201</strong>
                    </button>
                    <ul class="comment-share-meta">
                      <li>
                        <button class="post-comment">
                          <i class="bi bi-chat-bubble"></i>
                          <span>41</span>
                        </button>
                      </li>
                      <li>
                        <button class="post-share">
                          <i class="bi bi-share"></i>
                          <span>07</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* post status end */}

              {/* post status start */}
              <div class="card">
                {/* post title start */}
                <div class="post-title d-flex align-items-center">
                  {/* profile picture end */}
                  <div class="profile-thumb">
                    <a href="#">
                      <figure class="profile-thumb-middle">
                        <img
                          src="/assets/images/adda/profile/profile-small-8.jpg"
                          alt="profile picture"
                        />
                      </figure>
                    </a>
                  </div>
                  {/* profile picture end */}

                  <div class="posted-author">
                    <h6 class="author">
                      <a href="profile.html">Mili Raoulin</a>
                    </h6>
                    <span class="post-time">50 min ago</span>
                  </div>

                  <div class="post-settings-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="post-settings arrow-shape">
                      <ul>
                        <li>
                          <button>copy link to profile</button>
                        </li>
                        <li>
                          <button>edit post</button>
                        </li>
                        <li>
                          <button>embed profile</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* post title start */}
                <div class="post-content">
                  <p class="post-desc">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy.
                  </p>
                  <div class="post-thumb-gallery img-gallery">
                    <div class="row g-0">
                      <div class="col-6">
                        <figure class="post-thumb">
                          <a
                            class="gallery-selector"
                            href="/assets/images/adda/post/post-6.jpg"
                          >
                            <img
                              src="/assets/images/adda/post/post-6.jpg"
                              alt="post image"
                            />
                          </a>
                        </figure>
                      </div>
                      <div class="col-6">
                        <figure class="post-thumb">
                          <a
                            class="gallery-selector"
                            href="/assets/images/adda/post/post-7.jpg"
                          >
                            <img
                              src="/assets/images/adda/post/post-7.jpg"
                              alt="post image"
                            />
                          </a>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div class="post-meta">
                    <button class="post-meta-like">
                      <i class="bi bi-heart-beat"></i>
                      <span>You and 230 people like this</span>
                      <strong>230</strong>
                    </button>
                    <ul class="comment-share-meta">
                      <li>
                        <button class="post-comment">
                          <i class="bi bi-chat-bubble"></i>
                          <span>65</span>
                        </button>
                      </li>
                      <li>
                        <button class="post-share">
                          <i class="bi bi-share"></i>
                          <span>04</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* post status end */}

              {/* post status start */}
              <div class="card">
                {/* post title start */}
                <div class="post-title d-flex align-items-center">
                  {/* profile picture end */}
                  <div class="profile-thumb">
                    <a href="#">
                      <figure class="profile-thumb-middle">
                        <img
                          src="/assets/images/adda/profile/profile-small-6.jpg"
                          alt="profile picture"
                        />
                      </figure>
                    </a>
                  </div>
                  {/* profile picture end */}

                  <div class="posted-author">
                    <h6 class="author">
                      <a href="profile.html">Robart Faul</a>
                    </h6>
                    <span class="post-time">40 min ago</span>
                  </div>

                  <div class="post-settings-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="post-settings arrow-shape">
                      <ul>
                        <li>
                          <button>copy link to profile</button>
                        </li>
                        <li>
                          <button>edit post</button>
                        </li>
                        <li>
                          <button>embed profile</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* post title start */}
                <div class="post-content">
                  <p class="post-desc pb-0">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for Many desktop publishing packages and web page editors
                    now use Lorem Ipsum as their default model text, and a
                    search for Many desktop publishing duskam azer.
                  </p>
                  <div class="post-meta">
                    <button class="post-meta-like">
                      <i class="bi bi-heart-beat"></i>
                      <span>You and 250 people like this</span>
                      <strong>250</strong>
                    </button>
                    <ul class="comment-share-meta">
                      <li>
                        <button class="post-comment">
                          <i class="bi bi-chat-bubble"></i>
                          <span>80</span>
                        </button>
                      </li>
                      <li>
                        <button class="post-share">
                          <i class="bi bi-share"></i>
                          <span>10</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* post status end */}

              {/* post status start */}
              <div class="card">
                {/* post title start */}
                <div class="post-title d-flex align-items-center">
                  {/* profile picture end */}
                  <div class="profile-thumb">
                    <a href="#">
                      <figure class="profile-thumb-middle">
                        <img
                          src="/assets/images/adda/profile/profile-small-2.jpg"
                          alt="profile picture"
                        />
                      </figure>
                    </a>
                  </div>
                  {/* profile picture end */}

                  <div class="posted-author">
                    <h6 class="author">
                      <a href="profile.html">merry watson</a>
                    </h6>
                    <span class="post-time">20 min ago</span>
                  </div>

                  <div class="post-settings-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="post-settings arrow-shape">
                      <ul>
                        <li>
                          <button>copy link to profile</button>
                        </li>
                        <li>
                          <button>edit post</button>
                        </li>
                        <li>
                          <button>embed profile</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* post title start */}
                <div class="post-content">
                  <p class="post-desc">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy.
                  </p>
                  <div class="post-thumb-gallery">
                    <figure class="post-thumb img-popup">
                      <a href="/assets/images/adda/post/post-1.jpg">
                        <img
                          src="/assets/images/adda/post/post-1.jpg"
                          alt="post image"
                        />
                      </a>
                    </figure>
                  </div>
                  <div class="post-meta">
                    <button class="post-meta-like">
                      <i class="bi bi-heart-beat"></i>
                      <span>You and 201 people like this</span>
                      <strong>201</strong>
                    </button>
                    <ul class="comment-share-meta">
                      <li>
                        <button class="post-comment">
                          <i class="bi bi-chat-bubble"></i>
                          <span>41</span>
                        </button>
                      </li>
                      <li>
                        <button class="post-share">
                          <i class="bi bi-share"></i>
                          <span>07</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* post status end */}

              {/* post status start */}
              <div class="card">
                {/* post title start */}
                <div class="post-title d-flex align-items-center">
                  {/* profile picture end */}
                  <div class="profile-thumb">
                    <a href="#">
                      <figure class="profile-thumb-middle">
                        <img
                          src="/assets/images/adda/profile/profile-small-3.jpg"
                          alt="profile picture"
                        />
                      </figure>
                    </a>
                  </div>
                  {/* profile picture end */}

                  <div class="posted-author">
                    <h6 class="author">
                      <a href="profile.html">Jon Wileyam</a>
                    </h6>
                    <span class="post-time">15 min ago</span>
                  </div>

                  <div class="post-settings-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="post-settings arrow-shape">
                      <ul>
                        <li>
                          <button>copy link to profile</button>
                        </li>
                        <li>
                          <button>edit post</button>
                        </li>
                        <li>
                          <button>embed profile</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* post title start */}
                <div class="post-content">
                  <p class="post-desc pb-0">
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for
                  </p>
                  <div class="post-meta">
                    <button class="post-meta-like">
                      <i class="bi bi-heart-beat"></i>
                      <span>You and 204 people like this</span>
                      <strong>204</strong>
                    </button>
                    <ul class="comment-share-meta">
                      <li>
                        <button class="post-comment">
                          <i class="bi bi-chat-bubble"></i>
                          <span>41</span>
                        </button>
                      </li>
                      <li>
                        <button class="post-share">
                          <i class="bi bi-share"></i>
                          <span>07</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* post status end */}
            </div>

            <div class="col-lg-3 order-3">
              <aside class="widget-area">
                {/* widget single item start */}
                <div class="card widget-item">
                  <h4 class="widget-title">Events</h4>
                  <div class="widget-body">
                    <ul class="like-page-list-wrapper">
                      {products.events?.map((p, index) => (
                        <li class="unorder-list">
                          {/* profile picture end */}
                          <div class="profile-thumb">
                            <a href="#">
                              <figure class="profile-thumb-small">
                                <img src={p.img} alt="profile picture" />
                              </figure>
                            </a>
                          </div>
                          {/* profile picture end */}

                          <div class="unorder-list-info">
                            <h3 class="list-title">
                              <a href="#">{p.description}</a>
                            </h3>
                            <p class="list-subtitle">{p.mode}</p>
                          </div>
                        </li>
                      ))}
                      <li class="unorder-list">
                        {/* profile picture end */}
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              {/* <img
                                src={}
                                alt="profile picture"
                              /> */}
                            </figure>
                          </a>
                        </div>
                        {/* profile picture end */}

                        <div class="unorder-list-info">
                          <h3 class="list-title">
                            <a href="#">Any one can join with us if you want</a>
                          </h3>
                          <p class="list-subtitle">5 min ago</p>
                        </div>
                      </li>
                      <li class="unorder-list">
                        {/* profile picture end */}
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img
                                src="/assets/images/adda/profile/profile-35x35-8.jpg"
                                alt="profile picture"
                              />
                            </figure>
                          </a>
                        </div>
                        {/* profile picture end */}

                        <div class="unorder-list-info">
                          <h3 class="list-title">
                            <a href="#">Any one can join with us if you want</a>
                          </h3>
                          <p class="list-subtitle">10 min ago</p>
                        </div>
                      </li>
                      <li class="unorder-list">
                        {/* profile picture end */}
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img
                                src="/assets/images/adda/profile/profile-35x35-7.jpg"
                                alt="profile picture"
                              />
                            </figure>
                          </a>
                        </div>
                        {/* profile picture end */}

                        <div class="unorder-list-info">
                          <h3 class="list-title">
                            <a href="#">Any one can join with us if you want</a>
                          </h3>
                          <p class="list-subtitle">18 min ago</p>
                        </div>
                      </li>
                      <li class="unorder-list">
                        {/* profile picture end */}
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img
                                src="/assets/images/adda/profile/profile-35x35-6.jpg"
                                alt="profile picture"
                              />
                            </figure>
                          </a>
                        </div>
                        {/* profile picture end */}

                        <div class="unorder-list-info">
                          <h3 class="list-title">
                            <a href="#">Any one can join with us if you want</a>
                          </h3>
                          <p class="list-subtitle">25 min ago</p>
                        </div>
                      </li>
                      <li class="unorder-list">
                        {/* profile picture end */}
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img
                                src="/assets/images/adda/profile/profile-35x35-5.jpg"
                                alt="profile picture"
                              />
                            </figure>
                          </a>
                        </div>
                        {/* profile picture end */}

                        <div class="unorder-list-info">
                          <h3 class="list-title">
                            <a href="#">Any one can join with us if you want</a>
                          </h3>
                          <p class="list-subtitle">39 min ago</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* widget single item end */}

                {/* widget single item start */}
                <div class="card widget-item">
                  <h4 class="widget-title">Advertizement</h4>
                  <div class="widget-body">
                    <div class="add-thumb">
                      <a href="#">
                        <img
                          src="/assets/images/adda/banner/advertise.jpg"
                          alt="advertisement"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                {/* widget single item end */}

                {/* widget single item start */}
                <div class="card widget-item">
                  <h4 class="widget-title">Friends Zone</h4>
                  <div class="widget-body">
                    <ul class="like-page-list-wrapper">
                      <li class="unorder-list">
                        {/* profile picture end */}
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img
                                src="/assets/images/adda/profile/profile-35x35-1.jpg"
                                alt="profile picture"
                              />
                            </figure>
                          </a>
                        </div>
                        {/* profile picture end */}

                        <div class="unorder-list-info">
                          <h3 class="list-title">
                            <a href="#">arfim bolt</a>
                          </h3>
                          <p class="list-subtitle">
                            <a href="#">10 mutual</a>
                          </p>
                        </div>
                        <button class="like-button">
                          <img
                            class="heart"
                            src="/assets/images/adda/icons/heart.png"
                            alt=""
                          />
                          <img
                            class="heart-color"
                            src="/assets/images/adda/icons/heart-color.png"
                            alt=""
                          />
                        </button>
                      </li>
                      <li class="unorder-list">
                        {/* profile picture end */}
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img
                                src="/assets/images/adda/profile/profile-35x35-2.jpg"
                                alt="profile picture"
                              />
                            </figure>
                          </a>
                        </div>
                        {/* profile picture end */}

                        <div class="unorder-list-info">
                          <h3 class="list-title">
                            <a href="#">marry wither</a>
                          </h3>
                          <p class="list-subtitle">
                            <a href="#">02 mutual</a>
                          </p>
                        </div>
                        <button class="like-button active">
                          <img
                            class="heart"
                            src="/assets/images/adda/icons/heart.png"
                            alt=""
                          />
                          <img
                            class="heart-color"
                            src="/assets/images/adda/icons/heart-color.png"
                            alt=""
                          />
                        </button>
                      </li>
                      <li class="unorder-list">
                        {/* profile picture end */}
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img
                                src="/assets/images/adda/profile/profile-35x35-3.jpg"
                                alt="profile picture"
                              />
                            </figure>
                          </a>
                        </div>
                        {/* profile picture end */}

                        <div class="unorder-list-info">
                          <h3 class="list-title">
                            <a href="#">Rolin Theitar</a>
                          </h3>
                          <p class="list-subtitle">
                            <a href="#">drama</a>
                          </p>
                        </div>
                        <button class="like-button">
                          <img
                            class="heart"
                            src="/assets/images/adda/icons/heart.png"
                            alt=""
                          />
                          <img
                            class="heart-color"
                            src="/assets/images/adda/icons/heart-color.png"
                            alt=""
                          />
                        </button>
                      </li>
                      <li class="unorder-list">
                        {/* profile picture end */}
                        <div class="profile-thumb">
                          <a href="#">
                            <figure class="profile-thumb-small">
                              <img
                                src="/assets/images/adda/profile/profile-35x35-4.jpg"
                                alt="profile picture"
                              />
                            </figure>
                          </a>
                        </div>
                        {/* profile picture end */}

                        <div class="unorder-list-info">
                          <h3 class="list-title">
                            <a href="#">Active Mind</a>
                          </h3>
                          <p class="list-subtitle">
                            <a href="#">fitness</a>
                          </p>
                        </div>
                        <button class="like-button">
                          <img
                            class="heart"
                            src="/assets/images/adda/icons/heart.png"
                            alt=""
                          />
                          <img
                            class="heart-color"
                            src="/assets/images/adda/icons/heart-color.png"
                            alt=""
                          />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* widget single item end */}
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
