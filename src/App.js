// import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Grommet as OriginalGrommet, Main, ResponsiveContext } from 'grommet'
import {
  colors,
  theme,
  useColorSchemeOption,
  themedColors,
  GLOBAL_LETTER_SPACING
} from './theme-custom'
import { AppBar, ScreenWidthContainer, Footer } from './layout'
import * as routes from './routes'
import { withAuthentication as withAuthen } from './routes/withAuthentication'
import { withAuthorization as withAuthor } from './routes/withAuthorization'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalContextProvider } from './context'
import {
  OfferScreen,
  PartnerDashboardScreen,
  SignUpOfferScreen,
  ReviewsArchiveScreen,
  SignInScreen,
  VisitsHistoryScreen
} from './screens'
import { FirebaseAuth } from './components/firebase'

// Grommet dark background for the html tag. For overscrolls.
const HtmlOverscrollBackround = createGlobalStyle`
  html {
    background: ${p => colors[p.background]};
  }
`

const Grommet = styled(OriginalGrommet)`
  letter-spacing: ${GLOBAL_LETTER_SPACING}px;
`

function App() {
  const background = useColorSchemeOption(themedColors.systemGroupedBackground)

  return (
    <GlobalContextProvider>
      <FirebaseAuth />
      <Grommet full theme={theme} background={background} key={background}>
        <HtmlOverscrollBackround background={background} />
        <ResponsiveContext.Consumer>
          {size => (
            <ScreenWidthContainer>
              <Router>
                {/* <AppBar /> */}
                {/* <Route path="*" render={() => <AppBar />} /> */}
                <Route path="*" component={AppBar} />
                <Main>
                  <Switch>
                    <Route exact path={routes.OFFER} component={OfferScreen} />
                    <Route
                      exact
                      path={routes.DASHBOARD}
                      component={withAuthor(PartnerDashboardScreen)}
                    />
                    <Route
                      exact
                      path={routes.SIGN_UP_OFFER}
                      component={withAuthen(SignUpOfferScreen)}
                    />
                    <Route
                      exact
                      path={routes.REVIEWS}
                      component={withAuthor(ReviewsArchiveScreen)}
                    />
                    <Route
                      exact
                      path={routes.SIGN_IN}
                      component={withAuthen(SignInScreen)}
                    />
                    <Route
                      exact
                      path={routes.VISITS}
                      component={withAuthor(VisitsHistoryScreen)}
                    />
                  </Switch>
                </Main>
                <Route path="*" component={Footer} />
              </Router>
            </ScreenWidthContainer>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </GlobalContextProvider>
  )
}

export default App
