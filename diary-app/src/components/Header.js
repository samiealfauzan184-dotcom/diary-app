import { Image, StyleSheet, Text, View } from 'react-native';

export default function Header({ name = 'Samie Al Fauzan' }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Hallo, {name} 👋</Text>
        <Text style={styles.title}>Buku Harian</Text>
      </View>
      <Image
        source={require('../../assets/avatar/profile.jpg')}
        style={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  greeting: {
    fontSize: 14,
    color: '#6b7280',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#3b82f6',
    backgroundColor: '#e5e7eb',
  },
});