#!/usr/bin/env node

import { gameProcess } from '../core';
import { generateData, rule } from '../games/brain-calc';

gameProcess(generateData, rule);
