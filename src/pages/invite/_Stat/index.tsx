import type { FC } from 'react'
import { currencyFormatter } from '@/default'
import { Tooltip, Space } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Link, useIntl } from 'umi'

export interface statProps {
  registered: number
  commissionPendingBalance: number
  commissionRate: number
  invitePackagePlanId: number
  invitePackageAvailableNumber: number
  invitePackageNumber: number
  invitePackageLimit: number
  invitePackageRecoveryEnable: boolean
}

const Stat: FC<statProps> = (props) => {
  const {
    registered,
    commissionPendingBalance,
    commissionRate,
    invitePackagePlanId,
    invitePackageLimit,
    invitePackageNumber,
    invitePackageAvailableNumber,
    invitePackageRecoveryEnable,
  } = props
  const intl = useIntl()
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-4 js-appear-enabled">
          <div className="block block-rounded text-center">
            <div className="block-content block-content-full d-flex justify-content-center align-items-center">
              <div>
                <Link
                  className="text-success font-size-h1 font-w700"
                  to=""
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                  }}
                >
                  {registered}
                </Link>
                <div className="font-size-sm text-uppercase text-muted mt-1">
                  {intl.formatMessage({ id: 'invite.stat.registerd' })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-lg-4 js-appear-enabled">
          <div className="block block-rounded text-center">
            <div className="block-content block-content-full d-flex justify-content-center align-items-center">
              <div>
                <Link
                  className="text-success font-size-h1 font-w700"
                  to=""
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                  }}
                >
                  {commissionRate}%
                </Link>
                <div className="font-size-sm text-uppercase text-muted mt-1">
                  {intl.formatMessage({ id: 'invite.stat.commission_rate' })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-lg-4 js-appear-enabled">
          <div className="block block-rounded text-center">
            <div className="block-content block-content-full d-flex justify-content-center align-items-center">
              <div>
                <Link
                  className="text-success font-size-h1 font-w700"
                  to="#"
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                  }}
                >
                  {currencyFormatter.format(commissionPendingBalance / 100)}
                </Link>
                <div className="font-size-sm text-uppercase text-muted mt-1">
                  <Space>
                    {intl.formatMessage({ id: 'invite.stat.commission_pending_balance' })}
                    <Tooltip
                      title={intl.formatMessage({
                        id: 'invite.stat.commission_pending_balance.tip',
                      })}
                    >
                      <QuestionCircleOutlined />
                    </Tooltip>
                  </Space>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {invitePackagePlanId > 0 && (
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-4 js-appear-enabled">
            <div className="block block-rounded text-center">
              <div className="block-content block-content-full d-flex justify-content-center align-items-center">
                <div>
                  <Link
                    className="text-success font-size-h1 font-w700"
                    to="#"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                    }}
                  >
                    {invitePackageLimit}
                  </Link>
                  <div className="font-size-sm text-uppercase text-muted mt-1">
                    {intl.formatMessage({ id: 'invite.stat.invite_package_system_limit' })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-lg-4 js-appear-enabled">
            <div className="block block-rounded text-center">
              <div className="block-content block-content-full d-flex justify-content-center align-items-center">
                <div>
                  <Link
                    className="text-success font-size-h1 font-w700"
                    to=""
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                    }}
                  >
                    {invitePackageAvailableNumber}
                  </Link>
                  <div className="font-size-sm text-uppercase text-muted mt-1">
                    <Space>
                      {intl.formatMessage({ id: 'invite.stat.invite_package_available_number' })}
                      {invitePackageRecoveryEnable !== false && (
                        <Tooltip
                          title={intl.formatMessage({
                            id: 'invite.stat.invite_package_available_number.tip',
                          })}
                        >
                          <QuestionCircleOutlined />
                        </Tooltip>
                      )}
                    </Space>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-lg-4 js-appear-enabled">
            <div className="block block-rounded text-center">
              <div className="block-content block-content-full d-flex justify-content-center align-items-center">
                <div>
                  <Link
                    className="text-success font-size-h1 font-w700"
                    to=""
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                    }}
                  >
                    {invitePackageNumber}
                  </Link>
                  <div className="font-size-sm text-uppercase text-muted mt-1">
                    {intl.formatMessage({ id: 'invite.stat.invite_package_number' })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Stat
