import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import PageNotFound from "./components/PageNotFound";
import "./api/axiosDefaults";
import SignInForm from "./pages/auth/SignInForm";
import SignUpForm from "./pages/auth/SignUpForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import SceneCreateForm from "./pages/scenes/SceneCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import FindPostsDepartments from "./pages/posts/FindPostsDepartments";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import ScenesPage from "./pages/scenes/ScenesPage";
import ScenePage from "./pages/scenes/ScenePage";
import {
  useCategoryContext,
  useDeptContext,
  useDeptGeneralContext,
  useNumberContext,
  useSceneContext,
} from "./contexts/DeptCategoryContext";
import { useActContext } from "./contexts/ActContext";
import BreakdownAddEditForm from "./pages/scenes/breakdown/BreakdownAddEditForm";
import Home from "./pages/home/Home";
import ProfilesPage from "./pages/profiles/ProfilesPage";
import DeptPostCreate from "./pages/departments/DeptPostCreate";
import DeptPostsPage from "./pages/departments/DeptPostsPage";
import DeptsGeneral from "./pages/departments/DeptsGeneral";
import DeptPostPage from "./pages/departments/DeptPostPage";
import DeptPostEdit from "./pages/departments/DeptPostEdit";
import Landing from "./pages/home/Landing";
import DayCreateForm from "./pages/schedule/day/DayCreateForm";
import ScheduleDays from "./pages/schedule/ScheduleDays";
import DayEdit from "./pages/schedule/day/DayEdit";
import DayPage from "./pages/schedule/day/DayPage";
import ScheduleSceneEdit from "./pages/schedule/scheduleScene/ScheduleSceneEdit";
import CharactersPage from "./pages/characters/CharactersPage";
import CharacterPage from "./pages/characters/CharacterPage";
import CharacterCreate from "./pages/characters/CharacterCreate";
import CharacterEdit from "./pages/characters/CharacterEdit";
import MoodboardsPage from "./pages/moodboards/MoodboardsPage";
import LocationsPage from "./pages/locations/LocationsPage";
import LocationsEdit from "./pages/locations/LocationsEdit";
import LocationsCreate from "./pages/locations/LocationsCreate";
import LocationPage from "./pages/locations/LocationPage";
import {
  useCharacterContext,
  useLocationContext,
} from "./contexts/CharLocatContex";
import MoodboardEdit from "./pages/moodboards/MoodboardEdit";
import MoodboardPage from "./pages/moodboards/MoodboardPage";
import CrewInfoCreate from "./pages/callsheets/crewInfo/CrewInfoCreate";
import CallsheetsPage from "./pages/callsheets/CallsheetsPage";
import CrewInfoEdit from "./pages/callsheets/crewInfo/CrewInfoEdit";
import CallsheetCreate from "./pages/callsheets/CallsheetCreate";
import CallSheetPage from "./pages/callsheets/CallSheetPage";
import CallsheetEditPage from "./pages/callsheets/CallsheetEditPage";
import CrewInfo from "./pages/callsheets/crewInfo/CrewInfo";
import CrewLogo from "./pages/callsheets/crewInfo/addCrewInfoByDept/CrewLogo";
import IndexCardsPage from "./pages/indexcards/IndexCardsPage";
import IndexShotsPage from "./pages/indexshots/IndexShotsPage";
import SeriesPage from "./pages/indexshots/SeriesPage";
import IndexShotsFullSize from "./pages/indexshots/IndexShotsFullSize";
import Map from "./components/Map";
import ScriptScene from "./pages/scenes/scriptAndSceneScript/ScriptScene";
import LatestScript from "./pages/scenes/scriptAndSceneScript/LatestScript";
import LatestsPage from "./pages/home/LatestsPage";
import LatestCreate from "./pages/home/LatestCreate";
import LatestPage from "./pages/home/LatestPage";
import LatestEdit from "./pages/home/LatestEdit";
import MoodboardCreate from "./pages/moodboards/MoodboardCreate";
import ManageUsers from "./pages/users/ManageUsers";
import SeriesCreateForm from "./pages/series/SeriesCreateForm";
import EpisodeCreateForm from "./pages/episodes/EpisodeCreateForm";
import SeriesEditForm from "./pages/series/SeriesEditForm";
import EpisodeEditForm from "./pages/episodes/EpisodeEditForm";
import Tutorials from "./pages/tutorials/Tutorials";
import ForgotPasswordForm from "./pages/auth/ForgotPasswordForm";
import FindPostsDepartmentEpisode from "./pages/posts/FindPostsDepartmentEpisode";
import ScheduleDaysEpisode from "./pages/schedule/ScheduleDaysEpisode";
import CallsheetsPageEpisode from "./pages/callsheets/CallsheetsPageEpisode";
import ProfileEpisodePage from "./pages/profiles/ProfileEpisodePage";

import styles from "./App.module.css";
import Storyboard from "./pages/scenes/shotlistStoryboard/Storyboard";
import NewAllPosts from "./pages/posts/NewAllPosts";
import NewFeedPage from "./pages/posts/NewFeedPage";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  const sceneId = useSceneContext();
  const dept = useDeptContext();
  const category = useCategoryContext();
  const number = useNumberContext();
  const act = useActContext();
  const deptGeneral = useDeptGeneralContext();
  const character = useCharacterContext();
  const location = useLocationContext();

  return (
    <div className={`px-2 px-md-4 ${styles.App}`}>
      <NavBar />
      <div className={styles.Main}>
        <Switch>
          {/* ------------------- MAP -------------- */}
          <Route exact path="/:projectSlug/map" render={() => <Map />} />
          {/* --------------------AUTH --------- */}
          <Route
            exact
            path="/:projectSlug/signin"
            render={() => <SignInForm />}
          />
          <Route
            exact
            path="/:projectSlug/forget-password"
            render={() => <ForgotPasswordForm />}
          />

          <Route
            exact
            path="/:projectSlug/tutorials/:video_id/:title"
            render={() => <Tutorials message="No results found." />}
          />
          <Route
            exact
            path="/:projectSlug/signup"
            render={() => <div>No Page Found.</div>}
          />
          {/* ---------------------HOME --------- */}
          <Route exact path="/:projectSlug" render={() => <Landing />} />
          <Route exact path="/:projectSlug/home" render={() => <Home />} />
          <Route
            exact
            path="/:projectSlug/manage-users"
            render={() => <ManageUsers />}
          />
          {/* -------------------SCHEDULE ----------- */}
          <Route
            exact
            path="/:projectSlug/days/create"
            render={() => <DayCreateForm />}
          />
          <Route
            exact
            path="/:projectSlug/edit/days/:id/"
            render={() => <DayEdit />}
          />
          <Route
            exact
            path="/:projectSlug/days"
            render={() => (
              <ScheduleDays message="No results found. Please add a day" />
            )}
          />
          <Route
            exact
            path="/:projectSlug/days/episodes"
            render={() => (
              <ScheduleDaysEpisode message="No results found. Please add a day" />
            )}
          />
          <Route
            exact
            path="/:projectSlug/day/:id/"
            render={() => <DayPage />}
          />
          <Route
            exact
            path="/:projectSlug/schedule/scenes/edit/:id/"
            render={() => <ScheduleSceneEdit />}
          />
          {/* --------------- CREWINFO -------------*/}
          <Route
            exact
            path="/:projectSlug/crewinfo"
            render={() => <CrewInfo />}
          />
          <Route
            exact
            path="/:projectSlug/logo/edit"
            render={() => <CrewLogo />}
          />
          <Route
            exact
            path="/:projectSlug/crewinfo/create"
            render={() => <CrewInfoCreate />}
          />
          <Route
            exact
            path="/:projectSlug/crewinfo/edit/:id/"
            render={() => <CrewInfoEdit />}
          />
          {/* ---------------- CALLSHEETS --------- */}
          <Route
            exact
            path="/:projectSlug/callsheet/create/:id/"
            render={() => <CallsheetCreate />}
          />
          <Route
            exact
            path="/:projectSlug/callsheet/edit/:id/"
            render={() => <CallsheetEditPage />}
          />
          <Route
            exact
            path="/:projectSlug/callsheets"
            render={() => <CallsheetsPage message="No results found" />}
          />
          <Route
            exact
            path="/:projectSlug/callsheets/episodes"
            render={() => <CallsheetsPageEpisode message="No results found" />}
          />
          <Route
            exact
            path="/:projectSlug/callsheets/:id/"
            render={() => <CallSheetPage message="No results found" />}
          />
          {/* ------------- LOCATIONS APP -----------------*/}
          <Route
            exact
            path="/:projectSlug/locations/create"
            render={() => <LocationsCreate />}
          />
          <Route
            exact
            path="/:projectSlug/locations/:id"
            render={() => <LocationPage />}
          />
          <Route
            exact
            path="/:projectSlug/locations/:id/edit"
            render={() => <LocationsEdit />}
          />
          <Route
            exact
            path="/:projectSlug/locations"
            render={() => <LocationsPage message="No results found" />}
          />
          {/* --------------- CHARACTERS APP --------------*/}
          <Route
            exact
            path="/:projectSlug/characters"
            render={() => <CharactersPage message="No results found" />}
          />
          <Route
            exact
            path="/:projectSlug/characters/create"
            render={() => <CharacterCreate />}
          />
          <Route
            exact
            path="/:projectSlug/characters/:id"
            render={() => <CharacterPage />}
          />
          <Route
            exact
            path="/:projectSlug/characters/:id/edit"
            render={() => <CharacterEdit />}
          />
          {/* ----------------- INDEXCARDS APP ---------------*/}
          <Route
            exact
            path="/:projectSlug/indexcards"
            render={() => <IndexCardsPage message="No results found" />}
          />
          {/* -------------------- INDEXSHOTS APP ---------------*/}
          <Route
            exact
            path="/:projectSlug/series"
            render={() => <SeriesPage message="No results found" />}
          />
          <Route
            exact
            path="/:projectSlug/indexshots/:id"
            render={() => <IndexShotsPage />}
          />
          <Route
            exact
            path="/:projectSlug/indexshots/fullsize/:id"
            render={() => <IndexShotsFullSize />}
          />
          {/* ----------------- MOODBOARDS ------------------*/}
          {/* The word moodshot is used through the app in the urls for moodboard */}
          <Route
            exact
            path="/:projectSlug/moodshot/create"
            render={() => <MoodboardCreate />}
          />
          <Route
            exact
            path="/:projectSlug/moodshots/:id/edit"
            render={() => <MoodboardEdit />}
          />
          {/* all moodboards */}
          <Route
            exact
            path="/:projectSlug/moodshots"
            render={() => (
              <MoodboardsPage message="No results found. Please add a shot" />
            )}
          />
          <Route
            exact
            path="/:projectSlug/moodshots/:id"
            render={() => <MoodboardPage />}
          />
          {/* Moodshots for scenes */}
          <Route
            exact
            path="/:projectSlug/scene/moodshot/create"
            render={() => <MoodboardCreate sceneId={sceneId} number={number} />}
          />
          <Route
            exact
            path="/:projectSlug/scene/moodshots"
            render={() => (
              <MoodboardsPage
                message="No results found."
                filter={`scene=${sceneId}`}
                sceneId={sceneId}
                number={number}
              />
            )}
          />
          {/* Moodshots for characters */}
          <Route
            exact
            path="/:projectSlug/character/moodshot/create"
            render={() => <MoodboardCreate characterRole={character} />}
          />
          <Route
            exact
            path="/:projectSlug/character/moodshots"
            render={() => (
              <MoodboardsPage
                message="No results found."
                filter={`character=${character}`}
                characterRole={character}
              />
            )}
          />
          {/* Moodshots for locations */}
          <Route
            exact
            path="/:projectSlug/location/moodshot/create"
            render={() => <MoodboardCreate locationPlace={location} />}
          />
          <Route
            exact
            path="/:projectSlug/location/moodshots"
            render={() => (
              <MoodboardsPage
                message="No results found."
                filter={`location=${location}`}
                locationPlace={location}
              />
            )}
          />
          {/* series app */}

          <Route
            exact
            path="/:projectSlug/episodes/create"
            render={() => <EpisodeCreateForm />}
          />
          {/* <Route
            exact
            path="/:projectSlug/series/:seriesId/episodes/create"
            render={() => <EpisodeCreateForm />}
          /> */}
          <Route
            exact
            path="/:projectSlug/episodes/edit/:episodeId"
            render={() => <EpisodeEditForm />}
          />
          {/* ------------------- SCENES APP --------------------*/}
          <Route
            exact
            path="/:projectSlug/scenes/create"
            render={() => <SceneCreateForm />}
          />
          <Route
            exact
            path="/:projectSlug/story/scene/:id"
            render={() => <Storyboard />}
          />
          <Route
            exact
            path="/:projectSlug/scenes"
            render={() => (
              <ScenesPage message="No results found. Please add a scene" />
            )}
          />
          <Route
            exact
            path="/:projectSlug/act/scenes"
            render={() => (
              <ScenesPage message="No results found." filter={`act=${act}`} />
            )}
          />
          <Route
            exact
            path="/:projectSlug/scenes/:id"
            render={() => <ScenePage />}
          />
          <Route
            exact
            path="/:projectSlug/scenes/:id/edit"
            render={() => <BreakdownAddEditForm />}
          />
          <Route
            exact
            path="/:projectSlug/script/scene/:id"
            render={() => <ScriptScene />}
          />
          <Route
            exact
            path="/:projectSlug/script"
            render={() => <LatestScript />}
          />
          {/* ------------------------ SCENES WORKSPACE POSTS -------------------*/}
          <Route
            exact
            path="/:projectSlug/posts/create"
            render={() => <PostCreateForm />}
          />
          {/* Find posts by department page*/}
          <Route
            exact
            path="/:projectSlug/findposts/departments"
            render={() => <FindPostsDepartments />}
          />
          <Route
            exact
            path="/:projectSlug/findposts/departments/episodes"
            render={() => <FindPostsDepartmentEpisode />}
          />
          {/* All posts*/}
          <Route
            exact
            path="/:projectSlug/posts"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword."
                allposts
              />
            )}
          />

          <Route
            exact
            path="/:projectSlug/all_posts"
            render={() => (
              <NewAllPosts
                message="No results found. Adjust the search keyword."
                allposts
              />
            )}
          />
          {/* Posts by dept and category on the Scene page */}
          <Route
            exact
            path="/:projectSlug/dept/category"
            render={() => (
              <PostsPage
                message="No results found."
                filter={`scene=${sceneId}&departments=${dept}&category=${category}`}
                sceneId={sceneId}
                number={number}
                dept={dept}
                category={category}
              />
            )}
          />
          {/* Feed posts*/}
          {/* <Route
            exact
            path="/:projectSlug/feed"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
                feed
              />
            )}
          /> */}

          <Route
            exact
            path="/:projectSlug/feeds"
            render={() => (
              <NewFeedPage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
                feed
              />
            )}
          />

          {/*Profile Feed posts*/}
          <Route
            exact
            path="/:projectSlug/Profilefeed"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
                feed
              />
            )}
          />

          {/*Profile Feed posts*/}
          <Route
            exact
            path="/:projectSlug/Profilefeed"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
                feed
              />
            )}
          />
          {/* Stared posts
           * Uses the archived app in DRF*/}
          <Route
            exact
            path="/:projectSlug/archived"
            render={() => (
              <PostsPage
                message="No results found. Please archive a post."
                filter={`archives__owner__profile=${profile_id}&ordering=-archives__created_at&`}
                archived
              />
            )}
          />
          {/* Liked posts*/}
          <Route
            exact
            path="/:projectSlug/liked"
            render={() => (
              <PostsPage
                message="No results found. Please like a post."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
                liked
              />
            )}
          />
          {/* Posts by departments */}
          <Route
            exact
            path="/:projectSlug/departments"
            render={() => (
              <PostsPage
                message="No results found."
                filter={`departments=${dept}&category=${category}`}
                dept={dept}
                category={category}
              />
            )}
          />
          {/* Edit posts*/}
          <Route
            includes
            path="/:projectSlug/posts/:id/edit"
            render={() => <PostEditForm />}
          />

          {/* Post page*/}
          <Route
            exact
            path="/:projectSlug/posts/:id"
            render={() => <PostPage />}
          />
          {/* ------------- DEPTS XTRA APP ---------------*/}
          <Route
            exact
            path="/:projectSlug/depts/general"
            render={() => <DeptsGeneral />}
          />
          <Route
            exact
            path="/:projectSlug/department/posts/create"
            render={() => <DeptPostCreate />}
          />
          <Route
            exact
            path="/:projectSlug/department/posts"
            render={() => (
              <DeptPostsPage
                filter={`departments=${deptGeneral}`}
                deptGeneral={deptGeneral}
              />
            )}
          />
          <Route
            exact
            path="/:projectSlug/department/posts/:id/edit"
            render={() => <DeptPostEdit />}
          />
          <Route
            exact
            path="/:projectSlug/department/posts/:id"
            render={() => <DeptPostPage />}
          />
          {/* -------------------- Latest -------------------- */}
          <Route
            exact
            path="/:projectSlug/latest/create"
            render={() => <LatestCreate />}
          />
          <Route
            exact
            path="/:projectSlug/latest"
            render={() => <LatestsPage />}
          />
          <Route
            exact
            path="/:projectSlug/latest/post/:id"
            render={() => <LatestPage />}
          />
          <Route
            exact
            path="/:projectSlug/latest/post/:id/edit"
            render={() => <LatestEdit />}
          />
          {/* -------------------- PROFILES APP ---------------*/}
          <Route
            exact
            path="/:projectSlug/profiles"
            render={() => <ProfilesPage />}
          />
          <Route
            exact
            path="/:projectSlug/profiles/:id"
            render={() => <ProfilePage />}
          />
          <Route
            exact
            path="/:projectSlug/profiles/:id/episodes"
            render={() => <ProfileEpisodePage />}
          />
          {/* <Route
            exact
            path="/:projectSlug/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          /> */}
          <Route
            exact
            path="/:projectSlug/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/:projectSlug/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route render={() => <PageNotFound />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
