import {COLORS} from '../../../constants';

export default {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  employeeLabel: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 2,
    marginTop: 10,
    marginBottom: 10,
  },
  card: {
    margin: 15,
    borderRadius: 7,
    backgroundColor: COLORS.white,
  },
  header: {
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 2,
    padding: 7,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
  },
  itemDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 17,
    padding: 7,
    color: COLORS.textColor,
  },
};
