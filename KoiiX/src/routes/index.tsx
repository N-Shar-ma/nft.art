import { Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
// pages
import { Home, Nft, Artist, RegisterArtist } from "pages";
// ui
import { AppLayout } from "components/layouts";

export const Routes = () => {
  return (
    <>
      <Switch>
        <PublicRoute exact path="/" component={Home} layout={AppLayout} />
        <PublicRoute exact path="/nft/:id" component={Nft} layout={AppLayout} />
        <PublicRoute exact path="/artist/:id" component={Artist} layout={AppLayout} />
        <PublicRoute exact path="/register-artist" component={RegisterArtist} layout={AppLayout} />
        <PublicRoute exact path="/stake-on-artist" component={Artist} layout={AppLayout} />
      </Switch>
    </>
  );
};
