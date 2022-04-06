import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components/native";
import { 
  ClientStackNavigator, ClientStackProps, 
  ResearchStackNavigator, ResearchStackProps, 
  HomeStackNavigator, HomeStackProps, 
  CommunityStackNavigator, CommunityStackProps, 
  ProfileStackNavigator, ProfileStackProps, 
} from "@Navigator/index";
import { getFocusedRouteNameFromRoute, Route, RouteProp } from "@react-navigation/native";
import { BackHandler } from "react-native";

const MainBottomTab = createBottomTabNavigator<MainBottomTabProps>();

/**
 * @param route 
 * @returns bottom tab의 display type
 * 
 * determineBottomTabVisibility는 route를 통해 bottomTab을 보여줄 지 말지 결정합니다.
 * 이 함수를 Navigator에 바로 사용하면, 화면을 이동할 때마다 모든 자식 스택의 route를 추적합니다.
 * 따라서 각 Screen에 함수를 따로따로 적용시켜주는 것이 안전합니다.
 */
function determineBottomTabVisibility(route: any) {

  let screenName: undefined|string = undefined
  screenName = getFocusedRouteNameFromRoute(route);

  if (screenName !== undefined) {
    console.log(screenName);
    if (!(["ResearchDetailScreen"].includes(screenName))) {
      return "flex"
    } 
    return "none"
  }
}



/**
 * 앱 메인 하단바 네비게이터입니다. 사실상 앱 그 자체입니다.
 * 다른 네비게이터가 이 네비게이터를 구성하는 스크린 컴포넌트로 들어옵니다.
 * @author 현웅
 */
export function MainBottomTabNavigator() {
  BackHandler.addEventListener("hardwareBackPress", function() {
    /**
     * @Unsolved
     * @Task backPress를 하였을 때 Modal을 띄우거나, 한 번더 누르면 종료합니다 등의 처리
     */
    console.log("MainBottomTab에서는 backPress가 유효하지 않습니다")
    return true
  })
  return (
    <MainBottomTab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({ 
        headerShown: false,
        tabBarShowLabel: false,
      }
    )}>
      <MainBottomTab.Screen
        name={"ClientStack"}
        component={ClientStackNavigator}
        options={({ route }) => ({
          tabBarStyle: {
            display: determineBottomTabVisibility(route)
          },
          tabBarIcon: ({ focused }) => (
            <BottomTabIconView>
              <BottomTabIconImage
                source={
                  focused
                    ? bottomTabResource.Client.image.focused
                    : bottomTabResource.Client.image.unfocused
                }
              />
              {focused ? (
                <BottomTabIconFocusedText>
                  {bottomTabResource.Client.label}
                </BottomTabIconFocusedText>
              ) : (
                <BottomTabIconUnfocusedText>
                  {bottomTabResource.Client.label}
                </BottomTabIconUnfocusedText>
              )}
            </BottomTabIconView>
          ),
        })}
      />

      <MainBottomTab.Screen
        name={"ResearchStack"}
        component={ResearchStackNavigator}
        options={({ route }) => ({
          tabBarStyle: {
            display: determineBottomTabVisibility(route)
          },
          tabBarIcon: ({ focused }) => (
            <BottomTabIconView>
              <BottomTabIconImage
                source={
                  focused
                    ? bottomTabResource.Research.image.focused
                    : bottomTabResource.Research.image.unfocused
                }
              />
              {focused ? (
                <BottomTabIconFocusedText>
                  {bottomTabResource.Research.label}
                </BottomTabIconFocusedText>
              ) : (
                <BottomTabIconUnfocusedText>  
                  {bottomTabResource.Research.label}
                </BottomTabIconUnfocusedText>
              )}
            </BottomTabIconView>
          ),
        })}
      />
      <MainBottomTab.Screen
        name={"HomeStack"}
        component={HomeStackNavigator}
        options={({ route }) => ({
          tabBarStyle: {
            display: determineBottomTabVisibility(route)
          },
          tabBarIcon: ({ focused }) => (
            <BottomTabMainIconView>
              <BottomTabMainIconImage
                source={
                  focused
                    ? bottomTabResource.Home.image.focused
                    : bottomTabResource.Home.image.unfocused
                }
              />
            </BottomTabMainIconView>
          ),
        })}
      />
      <MainBottomTab.Screen
        name={"CommunityStack"}
        component={CommunityStackNavigator}
        options={({ route }) => ({
          tabBarStyle: {
            display: determineBottomTabVisibility(route)
          },
          tabBarIcon: ({ focused }) => (
            <BottomTabIconView>
              <BottomTabIconImage
                source={
                  focused
                    ? bottomTabResource.Community.image.focused
                    : bottomTabResource.Community.image.unfocused
                }
              />
              {focused ? (
                <BottomTabIconFocusedText>
                  {bottomTabResource.Community.label}
                </BottomTabIconFocusedText>
              ) : (
                <BottomTabIconUnfocusedText>
                  {bottomTabResource.Community.label}
                </BottomTabIconUnfocusedText>
              )}
            </BottomTabIconView>
          ),
        })}
      />
      <MainBottomTab.Screen
        name={"ProfileStack"}
        component={ProfileStackNavigator}
        options={({ route }) => ({
          tabBarStyle: {
            display: determineBottomTabVisibility(route)
          },
          tabBarIcon: ({ focused }) => (
            <BottomTabIconView>
              <BottomTabIconImage
                source={
                  focused
                    ? bottomTabResource.Profile.image.focused
                    : bottomTabResource.Profile.image.unfocused
                }
              />
              {focused ? (
                <BottomTabIconFocusedText>
                  {bottomTabResource.Profile.label}
                </BottomTabIconFocusedText>
              ) : (
                <BottomTabIconUnfocusedText>
                  {bottomTabResource.Profile.label}
                </BottomTabIconUnfocusedText>
              )}
            </BottomTabIconView>
          ),
        })}
      />
    </MainBottomTab.Navigator>
  );
}

export type MainBottomTabProps = {
  ClientStack: ClientStackProps;
  ResearchStack: ResearchStackProps;
  HomeStack: HomeStackProps;
  CommunityStack: CommunityStackProps;
  ProfileStack: ProfileStackProps;
};

const bottomTabResource = {
  Client: {
    label: "스타트업",
    image: {
      unfocused: require("@Resource/png/bottom_tab_client_inactive.png"),
      focused: require("@Resource/png/bottom_tab_client_active.png"),
    },
  },
  Research: {
    label: "리서치",
    image: {
      unfocused: require("@Resource/png/bottom_tab_research_inactive.png"),
      focused: require("@Resource/png/bottom_tab_research_active.png"),
    },
  },
  Home: {
    label: "",
    image: {
      unfocused: require("@Resource/png/bottom_tab_home_inactive.png"),
      focused: require("@Resource/png/bottom_tab_home_active.png"),
    },
  },
  Community: {
    label: "커뮤니티",
    image: {
      unfocused: require("@Resource/png/bottom_tab_community_inactive.png"),
      focused: require("@Resource/png/bottom_tab_community_active.png"),
    },
  },
  Profile: {
    label: "마이페이지",
    image: {
      unfocused: require("@Resource/png/bottom_tab_profile_inactive.png"),
      focused: require("@Resource/png/bottom_tab_profile_active.png"),
    },
  },
};



const BottomTabIconView = styled.View`
  align-items: center;
  margin-top: 12px;
`;

const BottomTabIconImage = styled.Image`
  width: 24px;
  height: 24px;
`;

const BottomTabIconUnfocusedText = styled.Text`
  color: black;
  font-size: 10px;
`;

const BottomTabIconFocusedText = styled(BottomTabIconUnfocusedText)`
  color: red;
`;

const BottomTabMainIconView = styled.View`
  align-items: center;
  margin-bottom: 45px;
`;

const BottomTabMainIconImage = styled.Image`
  width: 78px;
  height: 78px;
`;
