'use client';

import classNames from 'classnames';
import styles from '../../../styles/Home.module.scss';
import { IVersionTabProps } from '../../types';

export const VersionTab = ({
  versionId,
  versionName,
  isSelected,
  onSelectVersion,
}: IVersionTabProps) => {
  return (
    <label
      className={classNames(styles['version-tab'], {
        [styles['version-tab--active']]: isSelected,
      })}
      data-key={versionId}
      onClick={onSelectVersion}
    >
      CHUNITHM
      <br />
      {versionName}
    </label>
  );
};
