class Path {
  public readonly busker_comment_board = '/busker_comment_board'
  public readonly busker_apply_performance = '/busker_apply_performance'
  public readonly busker_data = '/busker_data'
  public readonly busker_apply = '/busker_apply'
  public readonly member_info = '/member_info'
  public readonly member_password = '/member_password'
  public readonly comments_record = '/comments_record'
  public readonly chatroom = '/chatroom'
  public readonly busker = '/busker'
  public readonly enroll = '/enroll'
  public readonly login = '/login'
  public readonly donateResult = '/donateResult'
  public readonly forgotPassword = '/forgotPassword'
  public readonly index = '/index'
  public readonly linePayDonatePage = '/linePayDonate'
  public readonly others = '/'


}

export const path = new Path()

class APIPATH {
  public readonly member = 'member'
  public readonly busker = 'busker'
  public readonly login = 'login'
  public readonly line = 'line'
  public readonly fb = 'fb'
  public readonly google = 'google'
  public readonly logout = 'logout'
  public readonly forgotPassword = 'forgotPassword'
  public readonly memberInfo = 'memberInfo'
  public readonly password = 'password'
  public readonly performance = 'performance'
  public readonly performances = 'performances'
  public readonly performancesTime = 'performancesTime'
  public readonly confirmLineDonateOrder = 'confirmLineDonateOrder'
  public readonly onlineAmount = 'onlineAmount'
  public readonly commentAmount = 'commentAmount'
  public readonly performancesDonate = 'performancesDonate'
  public readonly weekCommentAmount = 'weekCommentAmount'
  public readonly futurePerformancesData = 'futurePerformancesData'
}
export const apiPath = new APIPATH()
