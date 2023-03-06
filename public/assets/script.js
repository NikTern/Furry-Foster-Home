const viewAllBtn = $('#view-all-btn');
const mainContainer = document.querySelector('.main-container');
const petDiv = $('.pets');
const profile = $('#profile');
const loginBtn = $('#login-btn');
const signupBtn = $('#signup-btn');

const homePageRender = async () => { 
    
}

const profilePageRender = async () => { 
    petDiv.hide();
    const response = await fetch(`/api/users/profile`);
    const userData = await response.json();
    console.log(432423525);
    console.log(userData);
    let renderProfileHtml = `<div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4" id="profile=img">
                        <div class="profile-img">
                            <img src="https://i.pinimg.com/originals/1a/55/23/1a5523ed77eae11f78d73dd3864c4379.jpg"
                                alt="" />
                            <!-- <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file" />
                            </div> -->
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                            <h5 id="full-name" >
                                ${userData.first_name} ${userData.last_name}
                            </h5>
                            <h6 id="email" class="profile-info">
                                ${userData.email}
                            </h6>
                            <p class="proile-rating">Pets adopted : <span id="pets-adopted" >2</span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                        aria-controls="home" aria-selected="true">My Profile</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <!-- <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile" /> -->
                        <button type="button" class="btn btn-primary profile-edit-btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Edit Profile</button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Personal Info</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div class="form-group">
                                                <label for="edit-first-name" class="col-form-label">First Name:</label>
                                                <input type="text" class="form-control" id="edit-first-name">
                                            </div>
                                            <div class="form-group">
                                                <label for="edit-last-name" class="col-form-label">Last Name:</label>
                                                <input type="text" class="form-control" id="edit-last-name">
                                            </div>
                                            <div class="form-group">
                                                <span>Gender:</span>
                                                <label for="edit-gender-female" class="form-label">Female</label>
                                                <input type="radio" id="edit-gender-female" name="edit-gender" value="Female">
                                                <label for="edit-gender-male" class="form-label">Male</label>
                                                <input type="radio" id="edit-gender-male" name="edit-gender" value="Male">
                                            </div>
                                            <div class="form-group">
                                                <label for="edit-address" class="col-form-label">Address:</label>
                                                <input type="text" class="form-control" id="edit-address">
                                            </div>
                                            <div class="form-group">
                                                <label for="edit-phone" class="col-form-label">Phone:</label>
                                                <input type="text" class="form-control" id="edit-phone">
                                            </div>
                                            <div class="form-group">
                                                <label for="edit-current-pets" class="col-form-label">Current Pets Number:</label>
                                                <input type="text" class="form-control" id="edit-current-pets">
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" id="save-changes">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <h6>MY BIO</h6>
                            <p>I love animals!</p>
                            
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>First Name</label>
                                    </div>
                                    <div class="col-md-6 ">
                                        <p id="first-name" class="profile-info">${userData.first_name}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Last Name</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p id="last-name" class="profile-info">${userData.last_name}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Gender</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p id="gender" class="profile-info">${userData.gender}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Address</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p id="address" class="profile-info">${userData.address}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Phone</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p id="phone" class="profile-info">${userData.phone_number}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label>Current Pets</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p id="current-pets" class="profile-info">${userData.currentPets}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div
    `;
    
    mainContainer.insertAdjacentHTML(
      "beforeend",
      renderProfileHtml
    );
}


profile.on('click',profilePageRender)