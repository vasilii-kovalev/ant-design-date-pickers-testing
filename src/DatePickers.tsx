import moment from 'moment';
import { DatePicker, Space } from 'antd';

function disabledDate(current: moment.Moment) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

const App = () => {
  return (
    <Space direction="horizontal" size={12}>
      <DatePicker
        disabledDate={disabledDate}
        showToday={false}
        placeholder="From"
      />
      <DatePicker
        disabledDate={disabledDate}
        showToday={false}
        placeholder="To"
      />
    </Space>
  );
};

export default App;
