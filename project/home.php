
<html lang="en">
  <head>
    <title>Home page</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Bootstrap CSS v5.2.1 -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
  </head>

  <body>
    <header>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container">
          <img
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723420800&semt=ais_hybrid"
            class="img-fluid rounded-circle"
            alt=""
            height="75px"
            width="75px"
          />

          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="#" aria-current="page"
                  >Home <span class="visually-hidden">(current)</span></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="aboutus.php">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.php">Contact Us</a>
              </li>
            </ul>
            <form class="d-flex my-2 my-lg-0" action="register.php">
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <div class="container my-4">
        <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
          <ol class="carousel-indicators">
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="First slide"
            ></li>
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="1"
              aria-label="Second slide"
            ></li>
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to="2"
              aria-label="Third slide"
            ></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu0JAMPtLKtfmRY0TApaXq3s80-4RacHL1lA&s"
                class="w-100 d-block"
                alt="First slide"
                height="400px"
                width="900px"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu0JAMPtLKtfmRY0TApaXq3s80-4RacHL1lA&s"
                class="w-100 d-block"
                alt="Second slide"
                height="400px"
                width="900px"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu0JAMPtLKtfmRY0TApaXq3s80-4RacHL1lA&s"
                class="w-100 d-block"
                alt="Third slide"
                height="400px"
                width="900px"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="container">
        <h3 class="text-center">Services</h3>
        <div class="row justify-content-center align-items-center g-2">
          <div class="col">
            <div class="card">
              <img
                class="card-img-top"
                src="https://i.pinimg.com/236x/0f/07/71/0f0771cdb751568e01ee6d6a044a4bdb.jpg"
                alt="Title"
              />
              <div class="card-body">
                <h4 class="card-title">Image 1</h4>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, laboriosam?
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                class="card-img-top"
                src="https://i.pinimg.com/236x/0f/07/71/0f0771cdb751568e01ee6d6a044a4bdb.jpg"
                alt="Title"
              />
              <div class="card-body">
                <h4 class="card-title">Image 2</h4>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, consequuntur!
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                class="card-img-top"
                src="https://i.pinimg.com/236x/0f/07/71/0f0771cdb751568e01ee6d6a044a4bdb.jpg"
                alt="Title"
              />
              <div class="card-body">
                <h4 class="card-title">Image 3</h4>
                <p class="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium, totam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="text-center bg-dark text-light p-3">
      <blockquote>&copy; All Rights Reserved</blockquote>
    </footer>
    <!-- Bootstrap JavaScript Libraries -->
    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
      integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
      crossorigin="anonymous"
    ></script>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
      integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
      crossorigin="anonymous"
    ></script>
  </body>
</html>

    <blockquote>&copy; All Rights Reserved by Deepak</blockquote>
  </footer>
        <!-- Bootstrap JavaScript Libraries -->
        <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossorigin="anonymous"
        ></script>

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
            integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
            crossorigin="anonymous"
        ></script>
    </body>
</html>
