import React from 'react';
import {Alert, FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {
  Card,
  Button,
  Divider,
  Text,
  Title,
  Paragraph,
} from 'react-native-paper';
import recentNews from '../data/recentNews.json';
import recentArticles from '../data/recentArticles.json';
import trending from '../data/trending.json';

const renderArticle = ({item}: any) => (
  <Card mode="contained" style={styles.cardWidth}>
    <Card.Cover source={{uri: item.image}} />
    <Card.Content>
      <Title>{item.title}</Title>
      <Paragraph numberOfLines={3}>{item.content}</Paragraph>
    </Card.Content>
  </Card>
);

const renderDivider = () => <Divider style={styles.divider} />;

const showNotImplementedAlert = () => Alert.alert('Not implemented yet');

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text variant="titleLarge" style={styles.headerTitle}>
          Trending
        </Text>
        <Button mode="contained-tonal" onPress={showNotImplementedAlert}>
          See All
        </Button>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={trending.data}
        renderItem={renderArticle}
        ItemSeparatorComponent={renderDivider}
        contentContainerStyle={styles.contentContainer}
      />
      <View style={styles.header}>
        <Text variant="titleLarge" style={styles.headerTitle}>
          Recent News
        </Text>
        <Button mode="contained-tonal" onPress={showNotImplementedAlert}>
          See All
        </Button>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={recentNews.data}
        renderItem={renderArticle}
        ItemSeparatorComponent={renderDivider}
        contentContainerStyle={styles.contentContainer}
      />
      <View style={styles.header}>
        <Text variant="titleLarge" style={styles.headerTitle}>
          Recent Articles
        </Text>
        <Button mode="contained-tonal" onPress={showNotImplementedAlert}>
          See All
        </Button>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={recentArticles.data}
        renderItem={renderArticle}
        ItemSeparatorComponent={renderDivider}
        contentContainerStyle={styles.contentContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  divider: {
    backgroundColor: 'transparent',
    width: 16,
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
  },
  cardWidth: {
    width: 270,
  },
});

export default HomeScreen;
