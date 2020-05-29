import { StyleSheet, Dimensions } from 'react-native'
import COLORS from '../../../assets/colors'
import { getInset } from 'react-native-safe-area-view'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  messageScreenContainer: {
    position: 'relative',
    backgroundColor: COLORS.white,
    height: '100%'
  },
  gradContainer: {
    position: 'absolute',
    width,
    marginTop: getInset('top'),
    zIndex: -1,
    top: 0
  },
  headerNavigator: {
    position: 'relative',
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingTop: 15,
    paddingBottom: 100,
    marginBottom: 5
  },
  userName: {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    top: 15,
    textAlign: 'center',
    fontSize: 20,
    color: COLORS.white,
    fontWeight: '700'
  },
  messageContainer: {
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    width,
    bottom: 0,
    height: height,
    justifyContent: 'space-between',
    marginTop: 60,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 1,
    flex: 1
  },
  scrollContainer: {
    paddingTop: 38,
    paddingBottom: 10,
    paddingHorizontal: 25,
    flex: 11
  },
  sendContainer: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    width,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 10
  },
  sendBox: {
    flexDirection: 'row',
    backgroundColor: COLORS.lightblue,
    borderRadius: 17,
    paddingHorizontal: 14,
    paddingVertical: 8
  },
  fileIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    backgroundColor: COLORS.turquoise,
    borderRadius: 10
  },
  messageInput: {
    flex: 6,
    justifyContent: 'center',
    marginHorizontal: 10
  },
  sendIcon: {
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
})

export default styles