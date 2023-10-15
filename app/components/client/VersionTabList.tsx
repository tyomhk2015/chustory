'use client';

import { MouseEvent } from 'react';
import styles from '../../../styles/Home.module.scss';
import { VERSIONS } from '../../constants';
import { VersionTab } from './VersionTab';
import { IVersionTabListProps } from '../../types';

export const VersionTabList = ({
  selectedVersion,
  setSelectedVersion,
  setIsInitial,
}: IVersionTabListProps) => {
  const onSelectVersion = (event: MouseEvent<HTMLLabelElement>) => {
    const currentTarget = event.currentTarget;
    const retrievedVersionId = event.currentTarget.getAttribute('data-key');
    if (!currentTarget || !retrievedVersionId) return;
    currentTarget.tagName === 'DIV' && event.stopPropagation();

    setSelectedVersion(Number(retrievedVersionId));
    setIsInitial(false);
  };

  return (
    <div className={styles['version-tab-list']}>
      {VERSIONS.map((version, index) => (
        <VersionTab
          key={index}
          versionId={version.number}
          versionName={version.name}
          isSelected={selectedVersion === version.number}
          onSelectVersion={onSelectVersion}
        />
      ))}
    </div>
  );
};
