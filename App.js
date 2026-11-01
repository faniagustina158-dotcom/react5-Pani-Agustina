
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Alert
} from 'react-native';

// Fungsi untuk membuka link sosial media
const openSocialLink = (url) => {
  Linking.openURL(url).catch((err) => {
    Alert.alert('Error', 'Gagal membuka link');
    console.error('Gagal Membuka Link', err);
  });
};

export default function App() {
  return (
    <ScrollView
      style={style.halaman}
      contentContainerStyle={style.isiHalaman}
    >
      <View style={style.kartu}>

        <Image
          style={style.foto}
          source={{
            uri: 'https://i.pinimg.com/originals/d2/69/95/d269952a9efa8d91bbe55fa6a8fd8bda.jpg'
          }}
        />

        <Text style={style.nama}>
          Pani Agustina
        </Text>

        <Text style={style.jurusan}>
          Mahasiswa Manajemen Informatika
        </Text>

        <Text style={style.email}>
          faniagustina158@gmail.com
        </Text>

        <TouchableOpacity
          style={style.tombol}
          onPress={() =>
            openSocialLink('https://www.instagram.com/pani_agstna/')
          }
        >
          <Text style={style.textTombol}>
            Instagram
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({

  halaman: {
    flex: 1,
    backgroundColor: '#B0C4DE',
  },

  isiHalaman: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: 48,
  },

  kartu: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },

  nama: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  jurusan: {
    fontSize: 14,
    color: '#555555',
    marginTop: 4,
  },

  email: {
    fontSize: 14,
    color: '#1976D2',
    marginTop: 8,
  },

  tombol: {
    backgroundColor: '#1976D2',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
    width: '100%',
  },

  textTombol: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

});
