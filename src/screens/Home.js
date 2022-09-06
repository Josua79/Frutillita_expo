import * as React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors, device, gStyle } from '../constants';

// components
import AlbumsHorizontal from '../components/AlbumsHorizontal';

// mock data
import heavyRotation from '../mockdata/heavyRotation.json';
import jumpBackIn from '../mockdata/jumpBackIn.json';
import recentlyPlayed from '../mockdata/recentlyPlayed.json';
import artists from '../mockdata/artists.json'
import potcasts from '../mockdata/potcasts.json';

const Home = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const opacityIn = scrollY.interpolate({
    inputRange: [0, 128],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  });

  const opacityOut = scrollY.interpolate({
    inputRange: [0, 88],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  return (
    <React.Fragment>      
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={gStyle.container}
      >
        <View style={{margin:25}} />

        <AlbumsHorizontal 
          data={recentlyPlayed} 
          heading="Ultimas reproducciones" 
          itemSize={albumStyle.item2}
          imageSize={albumStyle.image2}
        />

        <AlbumsHorizontal
          data={artists}
          heading='Artistas - Album 2022'
          itemSize={albumStyle.item}
          imageSize={albumStyle.image}
        />

        <AlbumsHorizontal
          data={heavyRotation}
          heading="Tendencias"
          tagline="Se reproduce como pan caliente."
          itemSize={albumStyle.item}
          imageSize={albumStyle.image}
        />

        <AlbumsHorizontal
          data={potcasts}
          heading='Potcasts'
          tagline='Lo más escuchado del mes'
          itemSize={albumStyle.item2}
          imageSize={albumStyle.image2}
        />

        <AlbumsHorizontal
          data={jumpBackIn}
          heading="Recomendados para tí"
          tagline="Músicas para tí según basadas en tus gustos."
          itemSize={albumStyle.item}
          imageSize={albumStyle.image}
        />

        <AlbumsHorizontal 
          data={recentlyPlayed} 
          heading="Lo más esperado" 
          tagline="Top trending de este año"
          itemSize={albumStyle.item2}
          imageSize={albumStyle.image2}
        />

        <AlbumsHorizontal
          data={heavyRotation}
          heading="Descubre"
          tagline="Música basada en tus gustos"
          itemSize={albumStyle.item}
          imageSize={albumStyle.image}
        />
      </Animated.ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  iPhoneNotch: {
    backgroundColor: colors.black70,
    height: 44,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 20
  },
  containerHeader: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingTop: device.iPhoneNotch ? 60 : 36,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 10
  },
  
});

const albumStyle = StyleSheet.create({
  item: {
    marginRight: 16,
    width: 120
  },
  item2: {
    marginRight: 16,
    width: 180
  },
  image: {
    backgroundColor: colors.transparent,
    height: 120,
    width: 120
  },
  image2: {
    backgroundColor: colors.transparent,
    height: 180,
    width: 180
  },
})

export default Home;
