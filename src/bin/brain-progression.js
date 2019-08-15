#!/usr/bin/env node

import { gameProcess } from '../core';
import { generateData, rule } from '../games/brain-progression';

gameProcess(generateData, rule);
