import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import StyledText from './StyledText.jsx'
import Constants from 'expo-constants'
import theme from '../theme.js'
import { Link, useLocation } from 'react-router-native'
import { TouchableWithoutFeedback } from 'react-native-web'

// Styles for the AppBar component
const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      paddingTop: Constants.statusBarHeight + 10,
      paddingBottom: 10,
      paddingLeft: 10,
      flexDirection: 'row',
    },
    text: {
      color: theme.appBar.textSecondary,
      paddingHorizontal: 10,
    },
    scroll: {
      paddingBottom: 15,
    },
    active: {
      color: theme.appBar.textPrimary,
    },
  });
  
  /**
   * Individual tab in the AppBar.
   * 
   * @param children - The text content of the tab.
   * @param to - The target route for the tab.
   */
  const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation(); // Obtain the current path
  
    const active = pathname === to; // Determines the active tab
  
    const textStyles = [styles.text, active && styles.active];
  
    return (
      <Link to={to}>
        <StyledText fontWeight='bold' style={textStyles}>
          {children}
        </StyledText>
      </Link>
    );
  };
  
  /**
   * The AppBar component that displays navigation tabs.
   */
  const AppBar = () => {
    return (
      <View style={styles.container}>
        <ScrollView horizontal style={styles.scroll}>
          <AppBarTab to='/'>Repositories</AppBarTab>
          <AppBarTab to='/signin'>Sign In</AppBarTab>
        </ScrollView>
      </View>
    );
  };
  
  export default AppBar;